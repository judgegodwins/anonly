import axios, { AxiosError, AxiosResponse } from "axios";
import { FailureResponse, SuccessResponse } from "types/responses";

export const apiErrorParser = (e: Error | AxiosError<FailureResponse>) => {
  if (axios.isAxiosError(e) && e.response) {
    throw new Error(e.response?.data.message)
  } else {
    throw e;
  }
}

export const commonSuccessRespFilter = <RType extends AxiosResponse>(
  response: RType
) => {
  if (!response.data.success)
    throw new Error(response.data.message);

  return response;
}