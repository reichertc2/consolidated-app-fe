import { useEffect, useContext } from "react";
import { CancelToken } from "apisauce";
import apiUser from "../apis/apiAccounts";
import { AppContext } from "../../../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { IAccountEntryFormValues } from "../models/IAccount";


export default function useCreateAccount(account: IAccountEntryFormValues) {
    const { user, setAlert } = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        let response;
        const source = CancelToken.source();


        const createAccount = async () => {
            response = await apiUser.post(user, account, source.token);
            console.log('useCreateAccount createAccount: ',source.token)
            if (response) {
                setAlert({ msg: `User: ${account.name} Created`, cat: "success" });
                navigate("/user/login");
            } else if (response !== undefined && response === false) {
                setAlert({ msg: `Please Reauthorize Your Account`, cat: "warning" });
                navigate("/");
            }
        };
        if (account?.name) {
            createAccount();
        }
        return () => {
            source.cancel();
        };
    }, [account]);
}