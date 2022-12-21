import { create } from "apisauce";

const apiClient = (token:any, cancelToken:any) =>
  create({
    baseURL:
      window.location.hostname === "127.0.0.1" ||
      window.location.hostname === "localhost"
        ? "http://127.0.0.1:5000"
        : "",
    headers: {
      Authorization: "Bearer " + token,
    },
    cancelToken,
  });

export default apiClient;