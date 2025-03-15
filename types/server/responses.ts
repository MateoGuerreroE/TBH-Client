export interface FailedResponse {
  isSuccess: false;
  response: string;
}

export interface SuccessResponse<T> {
  isSuccess: true;
  response: T;
}

export type ServerResponse<T> = SuccessResponse<T> | FailedResponse;

// Auth
export interface IAuthResponse {
  entityId: string;
  email: string;
  fullName: string;
  token: string;
  role: "user" | "admin";
  expiration: string;
}
