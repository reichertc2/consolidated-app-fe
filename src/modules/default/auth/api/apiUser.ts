import apiClientNoAuth from "./clientNoAuth";
import apiClientTokenAuth from "./clientTokenAuth";
import { IRegisterEditUserFormValues } from "../models/IUserInterfaces";


const endpoint = "auth/user";

const post = async (data:IRegisterEditUserFormValues, cancelToken:any) => {
  const response = await apiClientNoAuth(cancelToken).post(endpoint, data);
  return response.ok;
};

const put = async (data:IRegisterEditUserFormValues, token:any, cancelToken:any) => {
  const response = await apiClientTokenAuth(token, cancelToken).put(
    endpoint,
    data
  );
  return response.ok;
};

export default {
  post,
  put,
};