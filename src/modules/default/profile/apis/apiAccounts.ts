import apiClientTokenAuth from "../../auth/api/clientTokenAuth";
import { IAccountEntryFormValues } from "../models/IAccount";


const endpoint = "api/profile/accounts";
const ia_endpoint = "api/ia/profile/accounts"

const get = async ( user:any, cancelToken: any) => {
    let error 
    let accounts
      const response: any = await apiClientTokenAuth(user, cancelToken).get(endpoint);
    if (response.ok){
        accounts = response.data.data

    } else{
        error="An Unexpected Error has Occured. Please try again later."
    }

  return {
    error,
    accounts
  };
};

const post = async (user: any, data: IAccountEntryFormValues, cancelToken: any) => {
  const response = await apiClientTokenAuth(user,cancelToken).post(ia_endpoint, data);
  return response.ok;
};

export default {
  get,
  post
};