import axios from "axios";

class MessageService {

  static http = axios.create({
    baseURL: 'http://localhost:8080/message', // temporary
    headers: {
      "Content-Type": "application/json"
    }
  });

  static sendMessage(message: string, to: string) {
    return this.http.post(`/${to}`, {
      text: message
    })
  }
}