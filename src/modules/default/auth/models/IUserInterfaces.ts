export interface IUserSettings {
    Id?: string;
    FirstName?: string;
    LastName?: string;
    email?: string;
    token?:any
}

export interface IRegisterEditUserFormValues {
    email: string;
    first_name: string;
    last_name: string;
    password: string;
}

export interface IUserLogin{
    loginCreds: any;
    setLoginCreds:any;
    setError:any;
    setUser:any;
}

export interface IUserLoginFormValues {
    email:string;
    password:string;
}