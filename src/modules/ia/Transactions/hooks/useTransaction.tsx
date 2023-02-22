import { CancelToken } from "apisauce";
import { useContext, useEffect, useState } from "react";
import { generatePath, useNavigate } from "react-router-dom";
import { AppContext } from "../../../../context/AppContext";
import apiTransactions, { ITransactionSubmission } from "../api/apiTransactions";
import { ITransactionEntryFormValues } from "../models/ITransactions";




export default function useTransaction(accountId: number, transaction: ITransactionEntryFormValues) {
    const { user, setAlert } = useContext(AppContext);
    const navigate = useNavigate();


    const data: ITransactionSubmission = {
        "user": user.token,
        "data": {
            "account": accountId,
            "transaction": transaction
        }
    }

    useEffect(() => {
        let response;
        const source = CancelToken.source();


        const createTransaction = async () => {
            response = await apiTransactions.post(user, data, source.token);
            console.log("useTransaction", response)
            if (response) {
                let id = accountId.toString()
                setAlert({ msg: `Transaction for: ${transaction.symbol} Created`, cat: "success" });
                navigate(generatePath("/portfolio/ia/account/list_transactions/:id", { id }));
            } else if (response !== undefined && response === false) {
                setAlert({ msg: `Transaction Submission Failed`, cat: "warning" });
                navigate("/user/profile");
            }
        };
        if (transaction?.symbol) {
            createTransaction();
        }
        return () => {
            source.cancel();
        };
    }, [transaction]);

}