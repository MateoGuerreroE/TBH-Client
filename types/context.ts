import { IAuthResponse } from "./server/responses";

export interface UserInfo extends IAuthResponse {
  firebaseToken: string;
}
