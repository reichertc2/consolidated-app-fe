import { Route, Routes } from "react-router-dom";
import Footer from '../sections/Footer';
import HomePageView from "../common/views/HomePageView";
import { readingListRoutes } from "../../reading/routes/menu";
import { portfolioListRoutes } from "../../ia/routes/menu";
import { userListRoutes } from "../routes/menu";


interface IMainBody { }

export const MainBody: React.FC<IMainBody> = () => {
    return (

        <main
            className="w-full m-auto m-0 bg-zinc-300"
        >

            <Routes>
                <Route path="/" element={<HomePageView />} />
                <Route path="/portfolio"  >

                    {
                        portfolioListRoutes.map(route =>
                            <Route
                                key={`${route.id}-profile-route`}
                                path={route.path}
                                element={route.element}
                            />
                        )
                    }

                </Route>

                <Route path="/reading" >

                    {
                        readingListRoutes.map(route =>
                            <Route
                                key={`${route.id}-reading-route`}
                                path={route.path}
                                element={route.element}
                            />
                        )
                    }

                </Route>

                <Route path="/user" >

                    {
                        userListRoutes.map(route =>
                            <Route
                                key={`${route.id}-user-route`}
                                path={route.path}
                                element={route.element}
                            />
                        )
                    }

                </Route>

            </Routes>
            
            <Footer />

        </main>

    );
}

export default MainBody;