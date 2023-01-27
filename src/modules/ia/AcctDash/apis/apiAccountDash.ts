import apiClientTokenAuth from "../../../default/auth/api/clientTokenAuth";
import { IAccountInfoResponse } from "../hooks/useAccountDash";
import { IAccountInfo } from "../models/IAccountInfo";


const endpoint = "api/ia/account_info";


const get = async ( user:any, cancelToken:any) => {
    let error 
    let acctInfo
      const response: any = await apiClientTokenAuth(user, cancelToken).get(endpoint);
    if (response.ok){
        acctInfo = response.data
    } else{
        error="An Unexpected Error has Occured. Please try again later."
    }

  return {
    error,
    acctInfo
  };
};


export default {
  get,
  
};