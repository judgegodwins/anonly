import { AxiosResponse } from "axios";

export class ApiError<ResType> extends Error {

  constructor(message: string, public response: AxiosResponse<ResType>) {
    super(message);
    this.name = 'ApiError';
    this.response = response;
  }
}