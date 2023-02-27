import { CancelToken } from "apisauce";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../context/AppContext";
import { IAccount } from "../../../default/profile/components/ProfileAccountList";
import apiAccounts from "../../default/apis/apiAccounts";


export default function useDeleteAccount(account?: IAccount) {
    const { user, setAlert } = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        let response;
        const source = CancelToken.source();


        const deleteAccount = async () => {
            response = await apiAccounts.del(user, source.token, account?.id);
            console.log("useTransaction", response)

            if (response) {

                setAlert({ msg: `Account for: ${account?.name} deleted`, cat: "success" });

            } else if (response !== undefined && response === false) {
                setAlert({ msg: `Account Deletion Failed`, cat: "warning" });
                navigate("/user/profile");
            }
        };
        if (account?.name) {
            deleteAccount();
        }
        return () => {
            source.cancel();
        };
    }, [account?.name]);

}