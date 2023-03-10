
export interface IAccount {
    id: number;
    name: string;
    institution: string;
    classification: string;
    balance: number;
}
export interface IAccountEntryFormValues {
    id?: number;
    name: string;
    institution: string;
    classification: string;
    balance?: number;
    
}

