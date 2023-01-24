import { Button, Link } from "@mui/material";
import { Route } from "react-router-dom";

interface IHomePage { }

export const HomePage: React.FC<IHomePage> = () => {

    return (
        <section style={{ width: "75%", margin: "15% auto", marginTop: "15%",backgroundColor:"lightblue", borderRadius:"10px" }}>


            <table
                // background="van-tay-media-TFFn3BYLc5s-unsplash.jpg"
                style={{ width: "100%", margin: "0px auto", height: "150px", color: "black" }}
            >
                <tbody>
                    <tr>
                        <td
                            style={{
                                width: "45%",
                                margin: "0px auto",
                                verticalAlign: "top",
                                fontSize: "2rem",
                                padding:".75rem"

                            }}
                        >
                            Welcome to the Cosolidated App!!
                        </td>
                        <td
                            style={{
                                width: "45%",
                                textAlign: "right",
                                // margin: "0px 0px 0px 3%",
                                verticalAlign: "bottom",
                                fontSize: "1.25rem",
                                padding:".75rem"
                                
                            }}
                        >
                            Your one stop shop for all your Personal needs.
                        </td>
                    </tr>
                </tbody>
            </table>
            <Button
                href="/user/login"
                sx={{ my: 2, color: 'blue', display: 'block', margin: "auto", width:"10%" }}>

                Login

            </Button>
        </section>
    );
};


export default HomePage;