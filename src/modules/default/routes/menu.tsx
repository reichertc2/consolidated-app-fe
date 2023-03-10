import LoginView from "../auth/views/LoginView";
import LogoutView from "../auth/views/LogoutView";
import RegisterEditView from "../auth/views/RegisterEditView";
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

]
