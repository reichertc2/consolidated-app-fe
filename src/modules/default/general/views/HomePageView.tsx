import { Button } from "@mui/material";
import HomePage from "../components/HomePage";


interface IHomePageView { }

export const HomePageView: React.FC<IHomePageView> = () => {

    return (
        <section
            className="bg-zinc-200 w-9/12 rounded m-auto my-40"
        >
            <HomePage />
            
            <Button
                href="/user/login"
                className="bg-zinc-900 block m-auto w-1/6"
            >
                Login
            </Button>

        </section>

    );
};


export default HomePageView;