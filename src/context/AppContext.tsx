import { createContext, useState } from "react";
import { IAppContext, IProps } from "../modules/default/models/IContextInterfaces";
import { IUserSettings } from "../modules/default/models/IUserInterfaces";


export const AppContext = createContext<IAppContext | null>({});

const AppContextProvider = ({ children }: IProps) => {
    const getUserFromLS = () => {
        let user = localStorage.getItem("user");
        if (user) {
            return JSON.parse(user);
        }
    };

    const [user, _setUser] = useState(getUserFromLS() ?? {});
    const [alert, setAlert] = useState({});

    const setUser = (user: IUserSettings) => {
        localStorage.setItem("user", JSON.stringify(user));
        _setUser(user);
    };

    const values = {
        user,
        setUser,
        alert,
        setAlert,
    };

    return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContextProvider;