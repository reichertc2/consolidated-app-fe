import AccountDashView from "../AcctDash/views/AccountDashView"
import AccountEntryView from "../default/views/AccountEntryView"
import PositionToolView from "../PositionTool/views/PositionToolView"
import ReallocationToolView from "../ReallocationTool/views/ReallocationToolView"
import TargetPortfolioView from "../TargetPortfolio/views/TargetPortfolioView"
import AccountTransactionListView from "../Transactions/views/AccountTransactionListView"
import TransactionEntryView from "../Transactions/views/TransactionEntryView"
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
  {
    id: "u5",
    element: <AccountEntryView />,
    path: "/portfolio/add_account",
  },
  {
    id: "p6",
    element: <AccountTransactionListView  />,
    path: "/portfolio/ia/account/list_transactions/:id",
  },
  {
    id: "p6",
    element: <TransactionEntryView  />,
    path: "/portfolio/ia/add_transaction",
  },
  
]


