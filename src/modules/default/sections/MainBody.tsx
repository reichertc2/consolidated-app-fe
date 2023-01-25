import { Route, Routes } from "react-router-dom";
import Footer from '../sections/Footer';
import LoginView from '../auth/views/LoginView';
import RegisterEditView from '../auth/views/RegisterEditView'
import AccountDashView from "../../ia/AcctDash/views/AccountDashView";
import TargetPortfolioView from "../../ia/TargetPortfolio/views/TargetPortfolioView";
import PositionToolView from "../../ia/PositionTool/views/PositionToolView";
import ReallocationToolView from "../../ia/ReallocationTool/views/ReallocationToolView";
import TransactionsView from "../../ia/Transactions/views/TransactionsView";
import LogoutView from "../auth/views/LogoutView"
import HomePageView from "../general/views/HomePageView";
import ReadingListView from "../../reading/readinglist/views/TransactionsView";


interface IMainBody { }

export const MainBody: React.FC<IMainBody> = () => {
    return (

        <main
            className="w-10/12 m-auto m-0 bg-zinc-300"
        >

            <Routes>
                <Route path="/" element={<HomePageView />} />
                <Route path="/portfolio"  >
                    <Route path="/portfolio/acct_dash" element={<AccountDashView />} />
                    <Route path="/portfolio/target_portfolio" element={<TargetPortfolioView />} />
                    <Route path="/portfolio/reallocation_tool" element={<ReallocationToolView />} />
                    <Route path="/portfolio/position_tool" element={<PositionToolView />} />
                    <Route path="/portfolio/transactions" element={<TransactionsView />} />

                </Route>

                <Route path="/reading" >
                    <Route path="/reading/readinglist" element={<ReadingListView />} />
                </Route>

                <Route path="/user" >
                    <Route path="/user/login" element={<LoginView />} />
                    <Route path="/user/logout" element={<LogoutView />} />
                    <Route path="/user/RegisterEditUser" element={<RegisterEditView />} />
                </Route>

            </Routes>
            <Footer />

        </main>

    );
}

export default MainBody;