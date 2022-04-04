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
  http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL:
        process.env.NODE_ENV === 'production'
          ? 'https://api.wesy.ch/routes'
          : 'http://localhost:8080/auth', // temporary
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // eslint-disable-next-line
    this.http.interceptors.request.use(function (config) {
      return {
        ...config,
        headers: { ...config.headers, Authorization: `Bearer ${getAccessToken()}` }
      };
    });
  }

  // static responseHandler <Data>(response: AxiosResponse<SuccessResponse<Data>>) {
  //   return commonSuccessRespFilter<Data>(response);
  // }

  login(loginDetails: LoginValues) {
    return this.http
      .post("/login", loginDetails)
      .then((response: AxiosResponse<SuccessDataResponse<AuthData>>) =>
        commonSuccessRespFilter(response)
      )
      .catch(apiErrorParser);
  }

  signup(signupDetails: SignupValues) {
    return this.http
      .post("/signup", _.pick(signupDetails, ["username", "password"]))
      .then((response: AxiosResponse<SuccessDataResponse<AuthData>>) =>
        commonSuccessRespFilter(response)
      )
      .catch(apiErrorParser);
  }

  setEmail(emailDetails: SetEmailValues) {
    return this.http
      .post("/verification/request", emailDetails)
      .then((response: AxiosResponse<SuccessResponse>) =>
        commonSuccessRespFilter(response)
      )
      .catch(apiErrorParser);
  }

  resendEmail() {
    return this.http
      .get("/verification/resend")
      .then((response: AxiosResponse<SuccessResponse>) =>
        commonSuccessRespFilter(response)
      )
      .catch(apiErrorParser);
  }

  verifyEmail(code: string) {
    return this.http
      .put("/verification/verify", undefined, { params: { code } })
      .then((response: AxiosResponse<SuccessResponse>) =>
        commonSuccessRespFilter(response)
      )
      .catch(apiErrorParser);
  }
}

export default new AuthService();