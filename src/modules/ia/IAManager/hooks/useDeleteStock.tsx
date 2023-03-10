import { CancelToken } from "apisauce";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../context/AppContext";
import apiStocks from "../apis/apiStocks";
import { IStock } from "../models/IStock";


export default function useDeleteStock(stock?: IStock) {
    const { user, setAlert } = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        let response;
        const source = CancelToken.source();


        const deleteStock = async () => {
            response = await apiStocks.del(user, source.token, stock?.id);
            console.log("useDeleteStock", response)

            if (response) {

                setAlert({ msg: `${stock?.symbol} deleted`, cat: "success" });

            } else if (response !== undefined && response === false) {
                setAlert({ msg: `Stock Deletion Failed`, cat: "warning" });
                navigate("/user/profile");
            }
        };
        if (stock?.symbol) {
            deleteStock();
        }
        return () => {
            source.cancel();
        };
    }, [stock?.symbol]);

}