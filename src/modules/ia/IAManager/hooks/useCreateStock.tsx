import { useEffect, useContext } from "react";
import { CancelToken } from "apisauce";
import { AppContext } from "../../../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { IStockEntryFormValues } from "../models/IStock";
import apiStocks, { IStockSubmission } from "../apis/apiStocks";


export default function useCreateStock(stock: IStockEntryFormValues, isSubmitted?:boolean) {
    const { user, setAlert } = useContext(AppContext);
    const navigate = useNavigate();


    const data: IStockSubmission = {
        "user": user.token,
        "data": stock
    }

    useEffect(() => {
        let response;
        const source = CancelToken.source();
        console.log('useCreateStock createAccount: ', data)

        const createStock = async () => {
            response = await apiStocks.post(user, data, source.token);
            // console.log('useCreateAccount createAccount: ',source.token)
            if (response) {
                setAlert({ msg: `${stock.symbol} Created`, cat: "success" });
                navigate("/user/profile");
            } else if (response !== undefined && response === false) {
                setAlert({ msg: `Please Reauthorize Your Account`, cat: "warning" });
                navigate("/");
            }
        };
        if (isSubmitted) {
            createStock();
        }
        return () => {
            source.cancel();
        };
    }, [stock]);
}