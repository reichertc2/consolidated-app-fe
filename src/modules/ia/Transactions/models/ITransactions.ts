export interface ITransaction {
    id: number 
    date: number
    transaction_type: string
    security_type: string
    symbol: string
    quantity: number
    amount: number
    price: number
    description: string
}

export interface ITransactionEntryFormValues {
    date: number
    transaction_type: string
    security_type: string
    symbol: string
    quantity: number
    amount: number
    price: number
    description: string
}

export interface IFileUploadFormValues {
    file: any
    
}