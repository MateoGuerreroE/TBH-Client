import { useAppStore } from "@/app/context/zustand";
import { useEffect } from "react";

export const InitiateVisitorToken = () => {
  const { setVisitorToken, visitorToken } = useAppStore();

  useEffect(() => {
    if (
      visitorToken === null &&
      !JSON.parse(localStorage.getItem("user-storage") ?? '{"state":{}}').state
        ?.visitorToken
    ) {
      const fetchVisitorToken = async () => {
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
          console.log("SETTING UP COOKIE");
          document.cookie = `publicToken=${data.token}; path=/; max-age=31536000; secure; SameSite=Lax`;
        } catch (error) {
          console.error("Error fetching visitor token:", error);
        }
      };

      fetchVisitorToken();
    }
  }, []);
};
