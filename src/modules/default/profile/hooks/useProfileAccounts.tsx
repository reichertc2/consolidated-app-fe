import { CancelToken } from "apisauce";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../context/AppContext";
import apiAccounts from "../../../ia/default/apis/apiAccounts";


export default function useProfileAccounts() {
    const { user } = useContext(AppContext);
    const [accts, setAcct] = useState<any>({})

    useEffect(() => {
        let response: any;
        const source = CancelToken.source();


        const getProfileAccounts = async () => {
            response = await apiAccounts.get( user.token,source.token);
            setAcct(response)
        };
        
        getProfileAccounts();
        
        return () => {
            source.cancel();
        };
    }, []);

    return accts
}