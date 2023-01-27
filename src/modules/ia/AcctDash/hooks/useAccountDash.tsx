import { CancelToken } from "apisauce";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../context/AppContext";
import { IAccountInfo } from "../models/IAccountInfo";
import apiAccountDash from "../apis/apiAccountDash";


export interface IAccountInfoResponse{
    acctInfo?:any,
    error?: any
}

export default function useAccountDash() {
    const { user } = useContext(AppContext);
    const [acctInfo, setAcctInfo] = useState<any>({})

    useEffect(() => {
        let response: any;
        const source = CancelToken.source();


        const getAccountDash = async () => {
            response = await apiAccountDash.get( user.token,source.token);
            setAcctInfo(response)
        };
        
        getAccountDash();
        
        return () => {
            source.cancel();
        };
    }, []);

    return acctInfo
}