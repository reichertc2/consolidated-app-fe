export interface IUserSettings {
    Id?: string;
    FirstName?: string;
    LastName?: string;
    email?: string;
}

export interface IRegisterEditUser {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
}