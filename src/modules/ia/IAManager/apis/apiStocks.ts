import apiClientTokenAuth from "../../../default/auth/api/clientTokenAuth";
import { IStockEntryFormValues } from "../models/IStock";


const ia_endpoint = "api/ia/symbols"


export interface IStockSubmission {
  user: any
  data: IStockEntryFormValues
}

const get = async ( user:any, cancelToken: any) => {
    let error 
    let stocks
      const response: any = await apiClientTokenAuth(user, cancelToken).get(ia_endpoint, {"tok":user});
    if (response.ok){
        stocks = response.data.data

    } else{
        error="An Unexpected Error has Occured. Please try again later."
    }

  return {
    error,
    stocks
  };
};

const post = async (user: any, data:IStockSubmission, cancelToken: any) => {
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