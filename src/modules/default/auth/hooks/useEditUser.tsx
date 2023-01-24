import { useEffect, useContext } from "react";
import { CancelToken } from "apisauce";
import apiUser from "../api/apiUser";
import { AppContext } from "../../../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { IRegisterEditUser } from "../models/IUserInterfaces";

export default function useEditUser(users:IRegisterEditUser) {
  const { user, setAlert } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    let response;
    const source = CancelToken.source();
    const editUsers = async () => {
      response = await apiUser.put(users, user.token, source.token);
      if (response) {
        setAlert({ msg: `User: ${users.firstName} Edited`, cat: "success" });
        navigate("/");
      } else if (response !== undefined && response === false) {
        setAlert({ msg: `Please Reauthorize Your Account`, cat: "warning" });
        navigate("/");
        ///redirect to the login page
      }
    };
    if (users?.firstName) {
      editUsers();
    }
    return () => {
      source.cancel();
    };
  }, [users]);
}