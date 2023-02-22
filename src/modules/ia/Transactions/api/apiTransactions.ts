import apiClientTokenAuth from "../../../default/auth/api/clientTokenAuth";
import { ITransactionEntryFormValues } from "../models/ITransactions";


const endpoint = "api/ia/account/transactions";
const ia_endpoint = "api/ia/account/transaction"


export interface ITransactionSubmission {
  user: any
  data: {
    account: number,
    transaction:ITransactionEntryFormValues
  }
  
}

const get = async ( user:any, acct:any, cancelToken: any) => {
    let error 
    let accounts
      const response: any = await apiClientTokenAuth(user, cancelToken).get(endpoint, {"acct":acct, "user": user});
    if (response.ok){
        accounts = response.data.data
        console.log("apiTransaction: get", accounts)

    } else{
        error="An Unexpected Error has Occured. Please try again later."
    }

  return {
    error,
    accounts
  };
};

const post = async (user: any, data:ITransactionSubmission, cancelToken: any) => {
  const response = await apiClientTokenAuth(user,cancelToken).post(ia_endpoint, data);
  return response.ok;
};

export default {
  get,
  post
};