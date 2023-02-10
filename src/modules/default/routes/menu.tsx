import AccountTransactionListView from "../../ia/Transactions/views/AccountTransactionListView";
import LoginView from "../auth/views/LoginView";
import LogoutView from "../auth/views/LogoutView";
import RegisterEditView from "../auth/views/RegisterEditView";
import AccountEntryView from "../profile/views/AccountEntryView";
import ProfileView from "../profile/views/ProfileView";

export const userListRoutes = 
[
  {
    id: "u1",
    element: <LoginView />,
    path: "/user/login",
  },
  {
    id: "u2",
    element: <LogoutView />,
    path: "/user/logout",
  },
  {
    id: "u3",
    element: <RegisterEditView />,
    path: "/user/RegisterEditUser" ,
  },
  {
    id: "u4",
    element: <ProfileView />,
    path: "/user/profile",
  },
  {
    id: "u5",
    element: <AccountEntryView />,
    path: "/user/profile/add_account",
  },
  {
    id: "p6",
    element: <AccountTransactionListView  />,
    path: "/user/profile/portfolio/ia/account/list_transactions/:id",
  },
]
