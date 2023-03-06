import apiClientTokenAuth from "../../../default/auth/api/clientTokenAuth";
import { IAccountEntryFormValues } from "../../../default/profile/models/IAccount";


const ia_endpoint = "api/ia/profile/accounts"


export interface IAccountSubmission {
  user: any
  data: IAccountEntryFormValues
}

const get = async ( user:any, cancelToken: any) => {
    let error 
    let accounts
      const response: any = await apiClientTokenAuth(user, cancelToken).get(ia_endpoint, {"tok":user});
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

const post = async (user: any, data:IAccountSubmission, cancelToken: any) => {
  const response = await apiClientTokenAuth(user,cancelToken).post(ia_endpoint, data);
  return response.ok;
};

const del = async (user: any, cancelToken: any,id?:number)=>{
  const response = await apiClientTokenAuth(user.token,cancelToken).delete(`${ia_endpoint}/${id}`)
  return response.ok
}

const put = async (user: any, cancelToken: any,id?:number)=>{
  const response = await apiClientTokenAuth(user.token,cancelToken).put(`${ia_endpoint}/${id}`)
  return response.ok
}

export default {
  get,
  post, 
  del, 
  put
};