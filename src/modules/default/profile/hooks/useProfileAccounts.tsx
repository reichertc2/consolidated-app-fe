import { CancelToken } from "apisauce";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../context/AppContext";
import apiAccounts from "../apis/apiAccounts";


export default function useProfileAccounts() {
    const { user } = useContext(AppContext);
    const [accts, setAcct] = useState<any>({})

    useEffect(() => {
        let response: any;
        const source = CancelToken.source();


        const getProfileAccounts = async () => {
            response = await apiAccounts.get( user.token,source.token);
            console.log("useProfileAccounts", response)
            setAcct(response)
        };
        
        getProfileAccounts();
        
        return () => {
            source.cancel();
        };
    }, []);

    return accts
}