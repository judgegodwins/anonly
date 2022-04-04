import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
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

class AuthService {
  public static http = axios.create({
    baseURL: `${process.env.API_URL}/auth`,
    headers: {
      "Content-Type": "application/json",
    },
  });

  static pluginInterceptor() {
    AuthService.http.interceptors.request.use(function (config) {
      return {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${getAccessToken()}`,
        },
      };
    });
  }

  // eslint-disable-next-line

  // static responseHandler <Data>(response: AxiosResponse<SuccessResponse<Data>>) {
  //   return commonSuccessRespFilter<Data>(response);
  // }

  static login(loginDetails: LoginValues) {
    return AuthService.http
      .post("/login", loginDetails)
      .then((response: AxiosResponse<SuccessDataResponse<AuthData>>) =>
        commonSuccessRespFilter(response)
      )
      .catch(apiErrorParser);
  }

  static signup(signupDetails: SignupValues) {
    return AuthService.http
      .post("/signup", _.pick(signupDetails, ["username", "password"]))
      .then((response: AxiosResponse<SuccessDataResponse<AuthData>>) =>
        commonSuccessRespFilter(response)
      )
      .catch(apiErrorParser);
  }

  static setEmail(emailDetails: SetEmailValues) {
    return AuthService.http
      .post("/verification/request", emailDetails)
      .then((response: AxiosResponse<SuccessResponse>) =>
        commonSuccessRespFilter(response)
      )
      .catch(apiErrorParser);
  }

  static resendEmail() {
    return AuthService.http
      .get("/verification/resend")
      .then((response: AxiosResponse<SuccessResponse>) =>
        commonSuccessRespFilter(response)
      )
      .catch(apiErrorParser);
  }

  static verifyEmail(code: string) {
    return AuthService.http
      .put("/verification/verify", undefined, { params: { code } })
      .then((response: AxiosResponse<SuccessResponse>) =>
        commonSuccessRespFilter(response)
      )
      .catch(apiErrorParser);
  }
}

AuthService.pluginInterceptor();

export default AuthService;
