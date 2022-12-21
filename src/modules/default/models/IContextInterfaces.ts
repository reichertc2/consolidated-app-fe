import { ReactNode } from "react";
import { IUserSettings } from "./IUserInterfaces";

export interface IAppContext {
    authenticated?: boolean;
    user?: IUserSettings | undefined;
    setAlert?: React.Dispatch<React.SetStateAction<{}>> | undefined

}

export interface IAlert {
    msg?: string;
    cat?: string;
}

export interface IProps {
    children?: ReactNode;
}