import { CancelToken } from "apisauce";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../context/AppContext";
import apiStocks from "../apis/apiStocks";


export default function useGetAllStocks() {
    const { user } = useContext(AppContext);
    const [stocks, setStocks] = useState<any>({})

    useEffect(() => {
        let response: any;
        const source = CancelToken.source();


        const getStocks = async () => {
            response = await apiStocks.get(user.token, source.token);
            setStocks(response)
        };

        getStocks();

        return () => {
            source.cancel();
        };
    }, []);

    return stocks
}