import { CancelToken } from "apisauce";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../context/AppContext";
import apiTransactions from "../api/apiTransactions";


export default function useTransactionList(account: number) {
    const { user } = useContext(AppContext);
    const [transactions, setTransactions] = useState<any>({})

    useEffect(() => {
        let response: any;
        const source = CancelToken.source();


        const getTransactions = async () => {
            response = await apiTransactions.get(user.token, account, source.token);
            console.log("useTransactionList", response)
            setTransactions(response)
        };

        getTransactions();

        return () => {
            source.cancel();
        };
    }, []);

    return transactions
}