import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { ITransaction } from "../models/ITransactions";
import TransactionLineItem from "../components/TransactionLineItem";
import TableRowMessge from "../../../default/common/components/TableRowMessage";
import AddItemLink from "../../../default/common/components/AddItemLink";


interface ITransactionLedger {
    id?: string,
    error: string,
    transactions: ITransaction[]
}

export const TransactionLedger: React.FC<ITransactionLedger> = ({ id, error, transactions }) => {

    return (

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell align="center">Type</TableCell>
                        <TableCell align="center">Symbol</TableCell>
                        <TableCell align="center">Qty</TableCell>
                        <TableCell align="center">Amount</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">Description</TableCell>
                        <TableCell align="right">
                            {id ?

                                <AddItemLink
                                    id={id}
                                    path={"/portfolio/ia/add_transaction/:id"}
                                />
                                : ""
                            }

                        </TableCell>
                    </TableRow>
                </TableHead>
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
            </Table>
        </TableContainer>

    );
};


export default TransactionLedger;