import apiClient from "./clientBasicAuth";

const endpoint = `auth/login`;  


export const getUser = async (email:string, password:string, cancelToken:any) => {
  let error;
  let user;
  
  const response:any = await apiClient(email, password, cancelToken).get(endpoint);
  console.log("getUser", response)

  if (response.ok) {
    user = response.data;
  } else if (response.status === 401) {
    error = "Invalid Email/Password Combo";
  } else {
    error = "An Unexpected Error has Occured. Please Try again Later.";
  }
  return {
    error,
    user,
  };
};