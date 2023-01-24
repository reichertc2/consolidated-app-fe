import { create } from "apisauce";
import base64 from "base-64";


const apiClient = (email:string, password:string, cancelToken:any) =>
  create({
    baseURL:
      window.location.hostname === "127.0.0.1" ||
      window.location.hostname === "localhost"
        ? `${process.env.REACT_APP_SERVER}`
        : "",
    headers: {
      Authorization: "Basic " + base64.encode(email + ":" + password),
    },
    cancelToken,
  });

export default apiClient;