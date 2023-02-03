import apiClientTokenAuth from "../../auth/api/clientTokenAuth";


const endpoint = "api/profile/accounts";

const get = async ( user:any, cancelToken:any) => {
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


export default {
  get,
  
};