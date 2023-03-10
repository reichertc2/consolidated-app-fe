export interface IStock{
    id:number;
    symbol:string;
    description: string;
    last: number;
    sector: string;
}

export interface IStockEntryFormValues{
    id?: number;
    symbol:string;
    description: string;
    last: number;
    sector: string;
}