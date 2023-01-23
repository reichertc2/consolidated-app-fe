import { useEffect, useContext } from "react";
import { CancelToken } from "apisauce";
import apiUser from "../api/apiUser";
import { AppContext } from "../../../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function useEditUser(users) {
  const { user, setAlert } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    let response;
    const source = CancelToken.source();
    const editUsers = async () => {
      response = await apiUser.put(users, user.token, source.token);
      if (response) {
        setAlert({ msg: `User: ${users.first_name} Edited`, cat: "success" });
        navigate("/");
      } else if (response !== undefined && response === false) {
        setAlert({ msg: `Please Reauthorize Your Account`, cat: "warning" });
        navigate("/");
        ///redirect to the login page
      }
    };
    if (users?.first_name) {
      editUsers();
    }
    return () => {
      source.cancel();
    };
  }, [users]);
}