import { Route, Routes } from "react-router-dom";
import Footer from '../sections/Footer';
import Login from '../admin/views/Login';
import RegisterEdit from '../admin/views/RegisterEdit'
import AccountDash from "../../ia/components/AccountDash";
import TargetPortfolio from "../../ia/components/TargetPortfolio";
import PositionTool from "../../ia/components/PositionTool";
import ReallocationTool from "../../ia/components/ReallocationTool";
import Transactions from "../../ia/components/Transactions";


const HomePage = () => {
    return (
        <section style={{ width: "100%", margin: "0px auto" }}>


            <table
                // background="van-tay-media-TFFn3BYLc5s-unsplash.jpg"
                style={{ width: "100%", margin: "0px auto", height: "150px" }}
            >
                <tbody>
                    <tr>
                        <td
                            style={{
                                width: "45%",
                                margin: "0px auto",
                                verticalAlign: "top",
                                fontSize: "2rem",
                                color: "white",
                            }}
                        >
                            Welcome to the Fintech App!!
                        </td>
                        <td
                            style={{
                                width: "45%",
                                textAlign: "right",
                                // margin: "0px 0px 0px 3%",
                                verticalAlign: "bottom",
                                fontSize: "1.25rem",
                                color: "white",
                                paddingBottom: "1rem",
                            }}
                        >
                            Your one stop shop for all your portfolio needs.
                        </td>
                    </tr>
                </tbody>
            </table>
            <div style={{ textAlign: "center" }}>
                <p style={{ color: "white", margin: "5%" }}>
                    Chris Reichert &copy; 2022
                </p>
            </div>
        </section>
    );
};

interface IMainBody { }

export const MainBody: React.FC<IMainBody> = () => {
    return (

        <main>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/portfolio"  >
                    <Route path="/portfolio/acct_dash" element={<AccountDash />} />
                    <Route path="/portfolio/target_portfolio" element={<TargetPortfolio />} />
                    <Route path="/portfolio/reallocation_tool" element={<ReallocationTool />} />
                    <Route path="/portfolio/position_tool" element={<PositionTool />} />
                    <Route path="/portfolio/transactions" element={<Transactions />} />

                </Route>

                <Route path="/user" >
                    <Route path="/user/login" element={<Login />} />
                    {/*<Route path="/user/logout" element={<Logout />} />*/}
                    <Route path="/user/RegisterEditUser" element={<RegisterEdit />} />
                </Route>


            </Routes>
            <Footer />

        </main>

    );
}

export default MainBody;