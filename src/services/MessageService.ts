import axios, { AxiosInstance } from "axios";
import { getAccessToken } from "helpers/authHelpers";

class MessageService {
  public http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL:
        process.env.NODE_ENV === "production"
          ? "https://anonly.herokuapp.com/message"
          : "http://localhost:8080/message", // temporary
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.http.interceptors.request.use(function (config) {
      return {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${getAccessToken()}`,
        },
      };
    });
  }

  sendMessage(data: { text: string }, to: string) {
    return this.http.post("/new", data, { params: { user: to } });
  }

  checkUser(username: string) {
    return this.http.get("/check-user", { params: { username } });
  }

  getMessages() {
    return this.http.get("/view/user-messages", {
      params: { page: 1, limit: 20 },
    });
  }
}

export default new MessageService();
