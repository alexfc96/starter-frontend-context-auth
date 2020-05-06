import axios from "axios";

class ApiClient {
  constructor() {
    this.apiClient = axios.create({
      baseURL: "http://localhost:5000/",
      withCredentials: true,
    });
  }

  login(body) {
    return this.apiClient.post("/login", body);
  }

  logout() {
    return this.apiClient.get("/logout");
  }

  whoami() {
    return this.apiClient.get("/whoami");
  }

  getProtected() {
    return this.apiClient.get("/protected");
  }
}

const apiClient = new ApiClient();
export default apiClient;
