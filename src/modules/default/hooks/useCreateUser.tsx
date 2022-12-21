import { useEffect, useContext } from "react";
import { CancelToken } from "apisauce";
import apiUser from "../api/apiUser";
import { AppContext } from "../../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { IRegisterEditUser } from "../models/IUserInterfaces";


export default function useCreateUser(users: IRegisterEditUser) {
    const { user, setAlert } = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        let response;
        const source = CancelToken.source();
        // console.log('useCreateUser useEffect: ',user.token)

        const createUsers = async () => {
            console.log("useCreateUser createUsers: ", users);
            // console.log('useCreateUser createUsers: ',source.token)

            response = await apiUser.post(users, source.token);
            console.log("useCreateUser createUsers: ", response);
            if (response) {
                setAlert({ msg: `User: ${users.firstName} Created`, cat: "success" });
                console.log("register success", response);
                navigate("/");
            } else if (response !== undefined && response === false) {
                setAlert({ msg: `Please Reauthorize Your Account`, cat: "warning" });
                navigate("/");
                ///redirect to the login page
            }
        };
        if (users?.firstName) {
            createUsers();
        }
        return () => {
            source.cancel();
        };
    }, [users]);
}