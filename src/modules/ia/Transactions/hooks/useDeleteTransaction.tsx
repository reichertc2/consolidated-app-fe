import { CancelToken } from "apisauce";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../context/AppContext";
import apiTransactions from "../api/apiTransactions";
import { ITransaction } from "../models/ITransactions";


export default function useDeleteTransaction(transaction?: ITransaction) {
    const { user, setAlert } = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        let response;
        const source = CancelToken.source();


        const deleteTransaction = async () => {
            response = await apiTransactions.del(user, source.token, transaction?.id);
            console.log("useTransaction", response)

            if (response) {

                setAlert({ msg: `Transaction for: ${transaction?.symbol} deleted`, cat: "success" });

            } else if (response !== undefined && response === false) {
                setAlert({ msg: `Transaction Deletion Failed`, cat: "warning" });
                navigate("/user/profile");
            }
        };
        if (transaction?.symbol) {
            deleteTransaction();
        }
        return () => {
            source.cancel();
        };
    }, [transaction?.symbol]);

}