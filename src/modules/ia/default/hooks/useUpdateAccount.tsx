import { CancelToken } from "apisauce";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../context/AppContext";
import { IAccountEntryFormValues } from "../../../default/profile/models/IAccount";
import apiAccounts from "../../default/apis/apiAccounts";


export default function useUpdateAccount(account?: IAccountEntryFormValues) {
    const { user, setAlert } = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        let response;
        const source = CancelToken.source();

        const updateAccount = async () => {
            response = await apiAccounts.put(user, source.token, account?.id, account);

            if (response) {

                setAlert({ msg: `Account for: ${account?.name} updated`, cat: "success" });

            } else if (response !== undefined && response === false) {
                setAlert({ msg: `Account Update Failed`, cat: "warning" });
                navigate("/user/profile");
            }
        };
        if (account?.id) {
            updateAccount();
        }
        return () => {
            source.cancel();
        };
    }, [account?.name]);

}