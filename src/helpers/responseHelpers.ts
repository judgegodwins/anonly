import axios, { AxiosError, AxiosResponse } from "axios";
import { FailureResponse, SuccessResponse } from "types/responses";
import { ApiError } from "./ApiError";

export const apiErrorParser = (e: Error | AxiosError<FailureResponse>) => {
  if (axios.isAxiosError(e) && e.response) {
    throw new ApiError(e.response?.data.message, e.response);
  } else {
    throw e;
  }
}

export const commonSuccessRespFilter = <RType extends SuccessResponse>(
  response: AxiosResponse<RType>
) => {
  if (!response.data.success)
    throw new Error(response.data.message);

  return response;
}