import { useEffect, useContext } from "react";
import { CancelToken } from "apisauce";
import apiUser from "../api/apiUser";
import { AppContext } from "../../../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { IRegisterEditUserFormValues } from "../models/IUserInterfaces";


export default function useCreateUser(users: IRegisterEditUserFormValues) {
    const { setAlert } = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        let response;
        const source = CancelToken.source();


        const createUsers = async () => {
            response = await apiUser.post(users, source.token);
            console.log('useCreateUser createUsers: ',source.token)
            if (response) {
                setAlert({ msg: `User: ${users.first_name} Created`, cat: "success" });
                navigate("/user/login");
            } else if (response !== undefined && response === false) {
                setAlert({ msg: `Please Reauthorize Your Account`, cat: "warning" });
                navigate("/");
            }
        };
        if (users?.first_name) {
            createUsers();
        }
        return () => {
            source.cancel();
        };
    }, [users]);
}