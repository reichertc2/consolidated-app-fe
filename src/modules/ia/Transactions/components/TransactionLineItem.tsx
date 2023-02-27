import { ITransaction } from '../models/ITransactions';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import useDeleteTransaction from '../hooks/useDeleteTransaction';

interface ITransactionProps {
    transaction: ITransaction
}

export const TransactionLineItem: React.FC<ITransactionProps> = ({ transaction }) => {

    const [id, setId] = useState(transaction.id.toString());
    const [deleteTranaction, setDeleteTransaction] = useState<ITransaction>()

    useDeleteTransaction(deleteTranaction)

    function handleDelete() {
        setDeleteTransaction(transaction)
    }

    return (

        <TableRow
            key={transaction.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {transaction.date}
            </TableCell>

            <TableCell align="right">{transaction.transaction_type}</TableCell>
            <TableCell align="right">{transaction.security_type}</TableCell>
            <TableCell align="right">{transaction.symbol}</TableCell>
            <TableCell align="right">{transaction.quantity}</TableCell>
            <TableCell align="right">{transaction.amount}</TableCell>
            <TableCell align="right">{transaction.price}</TableCell>
            <TableCell align="right">{transaction.description}</TableCell>
            <TableCell align="right">

                <Button onClick={() => handleDelete()}>
                    <DeleteIcon />
                </Button>

            </TableCell>
        </TableRow>
    );
};


export default TransactionLineItem;