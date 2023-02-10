import { CancelToken } from "apisauce";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../context/AppContext";
import apiTransactions from "../api/apiTransactions";
import { ITransactionEntryFormValues } from "../models/ITransactions";


export default function useTransaction(accountId:number, transaction:ITransactionEntryFormValues) {
    const { user } = useContext(AppContext);
    const [transactions, setTransactions] = useState<any>({})

    useEffect(() => {
        let response: any;
        const source = CancelToken.source();


        const getTransactions = async () => {
            response = await apiTransactions.get( user.token,source.token);
            console.log("useTransaction", response)
            setTransactions(response)
        };
        
        getTransactions();
        
        return () => {
            source.cancel();
        };
    }, []);

    return transactions
}