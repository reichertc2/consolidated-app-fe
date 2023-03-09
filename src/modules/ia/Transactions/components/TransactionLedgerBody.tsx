import { TableBody } from "@mui/material";
import { ITransaction } from "../models/ITransactions";
import TransactionLineItem from "../components/TransactionLineItem";
import TableRowMessge from "../../../default/common/components/TableItems/TableRowMessage";
import TransactionTableEntryForm from "../forms/TransactionTableEntryForm";



interface ITransactionLedgerBody {
    id?: string,
    error: string,
    showTableForm: boolean,
    setShowTableForm: (show: boolean) => void,
    transactions?: ITransaction[],
}

export const TransactionLedgerBody: React.FC<ITransactionLedgerBody> = ({ id, error, showTableForm, setShowTableForm, transactions }) => {




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
                    ) : <TableRowMessge
                        message={error ?? "No records found"}
                        columns={8}
                    />
                }
            </TableBody>
        </>
    );
};


export default TransactionLedgerBody;