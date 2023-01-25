import { Route, Routes } from "react-router-dom";
import Footer from '../sections/Footer';
import Login from '../auth/views/LoginView';
import RegisterEdit from '../auth/views/RegisterEditView'
import AccountDash from "../../ia/components/AccountDash";
import TargetPortfolio from "../../ia/components/TargetPortfolio";
import PositionTool from "../../ia/components/PositionTool";
import ReallocationTool from "../../ia/components/ReallocationTool";
import Transactions from "../../ia/components/Transactions";
import HomePage from "../general/components/HomePage";
import LogoutView from "../auth/views/LogoutView"



interface IMainBody { }

export const MainBody: React.FC<IMainBody> = () => {
    return (

        <main
            className="w-6/12 m-auto mt-14 px-5 py-3 bg-zinc-900"
        >

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
                    <Route path="/user/logout" element={<LogoutView />} />
                    <Route path="/user/RegisterEditUser" element={<RegisterEdit />} />
                </Route>


            </Routes>
            <Footer />

        </main>

    );
}

export default MainBody;