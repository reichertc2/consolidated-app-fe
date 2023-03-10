import { TableBody } from "@mui/material";
import { ITransaction } from "../models/ITransactions";
import TransactionLineItem from "../components/TransactionLineItem";
import TableRowMessage from "../../../default/common/components/TableItems/TableRowMessage";
import TransactionTableEntryForm from "../forms/TransactionTableEntryForm";
import useTransactionList from "../hooks/useTransactionList";



interface ITransactionLedgerBody {
    id?: string,
    showTableForm:boolean,
    setShowTableForm:(show:boolean)=>void
    showTableEditForm?: boolean
    setShowTableEditForm:(show:boolean)=>void
}

export const TransactionLedgerBody: React.FC<ITransactionLedgerBody> = ({ id, showTableForm, setShowTableForm }) => {

    const { transactions, error } = useTransactionList(Number(id))



    return (
        <>


            {showTableForm ?

                <TransactionTableEntryForm
                    setShowTableForm={setShowTableForm}
                    acctId={id ?? ""}
                />
                : ""
            }

            <TableBody>
                {transactions && transactions.length !== 0 ?
                    transactions.map((row: ITransaction) =>
                    (
                        <TransactionLineItem
                            key={row.id}
                            transaction={row}
                        />
                    )
                    ) : <TableRowMessage
                        message={error ?? "No records found"}
                        columns={8}
                    />
                }
            </TableBody>
        </>
    );
};


export default TransactionLedgerBody;