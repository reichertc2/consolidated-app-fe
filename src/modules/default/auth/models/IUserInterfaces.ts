export interface IUserSettings {
    Id?: string;
    FirstName?: string;
    LastName?: string;
    email?: string;
    token?:any
}

export interface IRegisterEditUser {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
}

export interface IUserLogin{
    loginCreds: any;
    setLoginCreds:any;
    setError:any;
    setUser:any;
}