import { createContext, useState } from "react";
import { IAppContext, IProps } from "../modules/default/common/models/IContextInterfaces";
import { IUserSettings } from "../modules/default/auth/models/IUserInterfaces";


export const AppContext = createContext<any>({});

const AppContextProvider = ({ children }: IProps) => {
    const getUserFromLS = () => {
        let user = localStorage.getItem("user");
        if (user) {
            return JSON.parse(user);
        }
    };

    const [user, _setUser] = useState(getUserFromLS() ?? {});
    const [alert, setAlert] = useState({});
    const [module, setModule] = useState()

    const setUser = (user: IUserSettings) => {
        localStorage.setItem("user", JSON.stringify(user));
        _setUser(user);
    };

    const values = {
        user,
        setUser,
        alert,
        setAlert,
        module,
        setModule
    };

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    );
};



export default AppContextProvider;