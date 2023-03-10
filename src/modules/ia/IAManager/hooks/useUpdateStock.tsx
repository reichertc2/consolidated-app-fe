import { CancelToken } from "apisauce";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../context/AppContext";
import apiStocks from "../apis/apiStocks";
import { IStockEntryFormValues } from "../models/IStock";


export default function useUpdateStock(stock?: IStockEntryFormValues) {
    const { user, setAlert } = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        let response;
        const source = CancelToken.source();


        const updateStock = async () => {
            response = await apiStocks.put(user, source.token, stock?.id);
            console.log("useStockUpdate", response)

            if (response) {

                setAlert({ msg: `${stock?.symbol} updated`, cat: "success" });

            } else if (response !== undefined && response === false) {
                setAlert({ msg: `Stock Update Failed`, cat: "warning" });
                navigate("/user/profile");
            }
        };
        if (stock?.symbol) {
            updateStock();
        }
        return () => {
            source.cancel();
        };
    }, [stock?.symbol]);

}