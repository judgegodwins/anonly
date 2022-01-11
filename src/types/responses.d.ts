import { User, AuthData } from "./auth";

export interface SuccessResponse {
  success: true;
  message: string;
}

export interface SuccessDataResponse<Data> extends SuccessResponse {
  data: Data
}

export interface FailureResponse {
  success: false;
  message: string;
  data?: null | undefined;
}