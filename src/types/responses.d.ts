import { User, AuthData } from "./auth";

export interface SuccessResponse {
  success: true;
  message: string;
}

export interface PaginatedResponse<Data> extends SuccessDataResponse<Data> {
  count?: number;
  next?: {
    page: number;
    limit: number;
  }
  prev?: {
    page: number;
    limit: number;
  }
}

export interface SuccessDataResponse<Data> extends SuccessResponse {
  data: Data
}

export interface FailureResponse {
  success: false;
  message: string;
  data?: null | undefined;
}