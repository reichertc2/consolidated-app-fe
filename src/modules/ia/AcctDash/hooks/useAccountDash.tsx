import { CancelToken } from "apisauce";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../context/AppContext";
import apiAccountDash from "../apis/apiAccountDash";


export default function useAccountDash() {
    const { user } = useContext(AppContext);
    const [acctInfo, setAcctInfo] = useState<any>({})

    useEffect(() => {
        let response: any;
        const source = CancelToken.source();


        const getAccountDash = async () => {
            response = await apiAccountDash.get( user.token,source.token);
            console.log("useAccountDash", response)

            setAcctInfo(response)
        };
        
        getAccountDash();
        
        return () => {
            source.cancel();
        };
    }, []);

    return acctInfo
}
