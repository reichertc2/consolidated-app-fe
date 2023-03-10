export interface IStock{
    id:number,
    symbol:string, 
    description: string, 
    last: number, 
    quanatity: number, 
    sector: string
}

export interface IStockEntryFormValues{
    symbol:string, 
    description: string, 
    last: number, 
    quantity: number, 
    sector: string
}