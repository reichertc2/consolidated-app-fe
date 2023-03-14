import { Button } from "@mui/material";
import { useContext } from "react";
import {AppContext} from "../../../../context/AppContext";
import HomePage from "../../common/components/HomePage";
import { basicViewStyle } from "../stylesFunctions/common";


interface IHomePageView { }

export const HomePageView: React.FC<IHomePageView> = () => {


    return (
        <section
            className={basicViewStyle()}
        >
            <HomePage />
            



        </section>

    );
};


export default HomePageView;