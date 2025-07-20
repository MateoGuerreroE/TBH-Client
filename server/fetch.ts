import { ClientError } from "@/types/Exceptions.types";
import { ServerResponse } from "@/types/Data.types";
import { redirect } from "next/navigation";

export type RequestCacheOptions = {
  next?: { revalidate: number };
  cache?: "no-store" | "force-cache";
};

export type FetchOptions = {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  authorization?: string;
  body?: Record<string, unknown>;
} & RequestCacheOptions;

export async function serverFetch<T>(
  uri: string,
  options: FetchOptions,
  redirects?: boolean
): Promise<ServerResponse<T>> {
  const { cache, next } = options;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${uri}`, {
    method: options.method,
    body: options.method !== "GET" ? JSON.stringify(options.body) : null,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: options.authorization
        ? `Bearer ${options.authorization}`
        : "",
    },
    cache,
    next,
  });
  if (!res.ok) {
    const { error } = await res.json();
    if (redirects) {
      redirect("/not-found");
    } else {
      throw new ClientError(
        "Error del servidor. Intente nuevamente más tarde",
        error || res.statusText
      );
    }
  }
  return (await res.json()) as ServerResponse<T>;
}

export async function getResource<T>(
  uri: string,
  redirects: boolean = false,
  cacheOptions?: RequestCacheOptions
): Promise<ServerResponse<T>> {
  return serverFetch<T>(uri, { method: "GET", ...cacheOptions }, redirects);
}

export async function postResource<T>(
  uri: string,
  body: Record<string, unknown>,
  authorization?: string,
  cacheOptions?: RequestCacheOptions
): Promise<ServerResponse<T>> {
  return serverFetch<T>(uri, {
    method: "POST",
    body,
    authorization,
    ...cacheOptions,
  });
}
