import { useAppStore } from "@/app/context/zustand";
import { getResource } from "@/server/fetch";
import { addToast } from "@heroui/react";
import { useEffect } from "react";
import { ICategoriesWithProducts } from "tbh-shared-types";
import { getPersistenceKey } from "./getPersitentData";
import {
  getClosestMidTimestamp,
  getPersistenceValue,
} from "@/utils/revalidation";
import { DateTime } from "luxon";

export const useInitialGlobals = () => {
  const {
    setVisitorToken,
    visitorToken,
    setInitialPayload,
    initialPayload,
    setIsAsyncLoading,
  } = useAppStore();

  useEffect(() => {
    // In case no visitor token is set
    if (visitorToken === null && !getPersistenceKey("visitorToken")) {
      fetchVisitorToken(setVisitorToken);
    }

    // If initial payload is not set
    if (initialPayload === null && !getPersistenceKey("initialPayload")) {
      fetchInitialProducts(setInitialPayload, setIsAsyncLoading);
    }

    // If initial payload is set but TTL is expired, fetch again
    if (
      initialPayload !== null &&
      initialPayload.ttl <= DateTime.local().toMillis()
    ) {
      fetchInitialProducts(setInitialPayload, setIsAsyncLoading);
    }
  }, []);
};

const fetchInitialProducts = async (
  setInitialPayload: (
    payload: ICategoriesWithProducts[] | null,
    ttl: number
  ) => void,
  setGlobalLoading: (loading: boolean) => void
) => {
  try {
    setGlobalLoading(true);
    const response = await getResource<ICategoriesWithProducts[]>(
      "category/initial",
      false,
      {
        cacheOptions: {
          cache: "force-cache",
          next: { revalidate: getPersistenceValue() },
        },
      }
    );

    setInitialPayload(response.data, getClosestMidTimestamp(DateTime.local()));
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Error fetching initial products:", error);
    }
    addToast({
      title: "Ha ocurrido un error al cargar la página.",
      description: "Por favor, recarga la página.",
      color: "danger",
    });
  } finally {
    setGlobalLoading(false);
  }
};

const fetchVisitorToken = async (
  setVisitorToken: (token: string | null) => void
) => {
  try {
    const response = await fetch("/api/visitorToken", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch visitor token");
    }

    const data = await response.json();
    setVisitorToken(data.token);
    document.cookie = `publicToken=${data.token}; path=/; max-age=31536000; secure; SameSite=Lax`;
  } catch (error) {
    console.error("Error fetching visitor token:", error);
  }
};
