import axios, { AxiosError, AxiosResponse } from "axios";
import _ from "lodash";
import {
  AuthData,
  LoginValues,
  SetEmailValues,
  SignupValues,
} from "types/auth";
import { SuccessDataResponse, SuccessResponse } from "types/responses";
import {
  apiErrorParser,
  commonSuccessRespFilter,
} from "helpers/responseHelpers";
import { getAccessToken } from "helpers/authHelpers";

export default class AuthService {
  private static config = {
    baseURL:
      process.env.NODE_ENV === "production"
        ? `${process.env.REACT_API_URL}/auth`
        : "http://localhost:8080/auth", // temporary
    headers: {
      "Content-Type": "application/json",
    },
  };

  private static http = axios.create(this.config);
  private static httpWithAuthHeader = axios.create({
    ...this.config,
    headers: {
      ...this.config.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });

  // static responseHandler <Data>(response: AxiosResponse<SuccessResponse<Data>>) {
  //   return commonSuccessRespFilter<Data>(response);
  // }

  static login(loginDetails: LoginValues) {
    return this.http
      .post("/login", loginDetails)
      .then((response: AxiosResponse<SuccessDataResponse<AuthData>>) =>
        commonSuccessRespFilter(response)
      )
      .catch(apiErrorParser);
  }

  static signup(signupDetails: SignupValues) {
    return this.http
      .post("/signup", _.pick(signupDetails, ["username", "password"]))
      .then((response: AxiosResponse<SuccessDataResponse<AuthData>>) =>
        commonSuccessRespFilter(response)
      )
      .catch(apiErrorParser);
  }

  static setEmail(emailDetails: SetEmailValues) {
    return this.httpWithAuthHeader
      .post("/verification/request", emailDetails)
      .then((response: AxiosResponse<SuccessResponse>) =>
        commonSuccessRespFilter(response)
      )
      .catch(apiErrorParser);
  }
}
