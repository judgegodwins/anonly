import axios, { AxiosInstance, AxiosResponse } from "axios";
import { getAccessToken } from "helpers/authHelpers";
import {
  apiErrorParser,
  commonSuccessRespFilter,
} from "helpers/responseHelpers";
import { Message } from "types/message";
import { PaginatedResponse } from "types/responses";

class MessageService {
  public static http = axios.create({
    baseURL: `${process.env.API_URL}/message`,
    headers: {
      "Content-Type": "application/json",
    },
  });

  static pluginInterceptor() {
    MessageService.http.interceptors.request.use(function (config) {
      return {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${getAccessToken()}`,
        },
      };
    });
  }

  static sendMessage(data: { text: string }, to: string) {
    return MessageService.http.post("/new", data, { params: { user: to } });
  }

  static checkUser(username: string) {
    return MessageService.http.get("/check-user", { params: { username } });
  }

  static getMessages(page: number, limit = 10) {
    return MessageService.http
      .get("/view/user-messages", {
        params: { page, limit },
      })
      .then((response: AxiosResponse<PaginatedResponse<Message[]>>) =>
        commonSuccessRespFilter(response)
      )
      .catch(apiErrorParser);
  }
}

MessageService.pluginInterceptor();

export default MessageService;
