import { ReactNode } from "react";
import { IUserSettings } from "./IUserInterfaces";

export interface IAppContext {
    authenticated?: boolean;
    user?: IUserSettings | null;
    setAlert?: React.Dispatch<React.SetStateAction<{}>> | null

}

export interface IAlert {
    msg?: string;
    cat?: string;
}

export interface IProps {
    children?: ReactNode;
}