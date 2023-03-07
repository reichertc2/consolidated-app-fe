import { Button } from "@mui/material";
import { useContext } from "react";
import {AppContext} from "../../../../context/AppContext";
import HomePage from "../../common/components/HomePage";
import { basicViewStyle } from "../stylesFunctions/common";


interface IHomePageView { }

export const HomePageView: React.FC<IHomePageView> = () => {

    const { user } = useContext(AppContext)

    return (
        <section
            className={basicViewStyle()}
        >
            <HomePage />
            
            {!user.email ?

                <Button
                    href="/user/login"
                    className="bg-zinc-900 block m-auto w-1/6"
                >
                    Login
                </Button>

                : ""
            }


        </section>

    );
};


export default HomePageView;