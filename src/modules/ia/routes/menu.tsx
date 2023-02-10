import AccountDashView from "../AcctDash/views/AccountDashView"
import PositionToolView from "../PositionTool/views/PositionToolView"
import ReallocationToolView from "../ReallocationTool/views/ReallocationToolView"
import TargetPortfolioView from "../TargetPortfolio/views/TargetPortfolioView"
import TransactionsView from "../Transactions/views/TransactionsView"


export const portfolioListRoutes = 
[
  {
    id: "p1",
    element: <AccountDashView />,
    path: "/portfolio/acct_dash",
  },
  {
    id: "p2",
    element: <TargetPortfolioView />,
    path: "/portfolio/target_portfolio",
  },
  {
    id: "p3",
    element: <ReallocationToolView />,
    path: "/portfolio/reallocation_tool" ,
  },
  {
    id: "p4",
    element: <PositionToolView />,
    path: "/portfolio/position_tool",
  },
  {
    id: "p5",
    element: <TransactionsView />,
    path: "/portfolio/transactions",
  },

]


