import { ServerResponse } from "@/types/server/responses";
import axios, { AxiosRequestConfig, Method } from "axios";

async function serverRequest<T>(
  method: Method,
  url: string,
  payload?: unknown,
  config?: AxiosRequestConfig,
  failedMessage?: string
): Promise<ServerResponse<T>> {
  try {
    const { data } = await axios.request<T>({
      method,
      url,
      data: payload,
      ...config,
    });
    return {
      isSuccess: true,
      response: data,
    };
  } catch {
    const showMessage = failedMessage || "An error occurred";
    return {
      isSuccess: false,
      response: showMessage,
    };
  }
}

export async function serverPostRequest<T, K = object>(
  payload: K,
  url: string,
  config?: AxiosRequestConfig,
  failedMessage?: string
): Promise<ServerResponse<T>> {
  return serverRequest<T>(
    "POST",
    url, //! TESTING
    payload,
    config,
    failedMessage
  );
}

export async function serverGetRequest<T>(
  uriPath: string,
  config?: AxiosRequestConfig,
  failedMessage?: string
): Promise<ServerResponse<T>> {
  return serverRequest<T>("GET", uriPath, undefined, config, failedMessage);
}
