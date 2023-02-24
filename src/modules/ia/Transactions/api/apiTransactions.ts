import apiClientTokenAuth from "../../../default/auth/api/clientTokenAuth";
import { ITransactionEntryFormValues } from "../models/ITransactions";


const ia_endpoint = "api/ia/account/transactions"


export interface ITransactionSubmission {
  user: any
  data: {
    account: number,
    transactions:ITransactionEntryFormValues[]
  }
  
}

const get = async ( user:any, acct:any, cancelToken: any) => {
    let error 
    let transactions
      const response: any = await apiClientTokenAuth(user, cancelToken).get(ia_endpoint, {"acct":acct, "user": user});
    if (response.ok){
        transactions = response.data.data

    } else{
        error="An Unexpected Error has Occured. Please try again later."
    }

  return {
    error,
    transactions
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