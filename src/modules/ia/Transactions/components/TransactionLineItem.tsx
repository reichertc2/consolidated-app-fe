import { ITransaction } from '../models/ITransactions';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import useDeleteTransaction from '../hooks/useDeleteTransaction';
import TableBodyCell from '../../../default/common/components/TableBodyCell';

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
            <TableBodyCell title={transaction.date} />
            <TableBodyCell title={transaction.transaction_type} />
            <TableBodyCell title={transaction.security_type} />
            <TableBodyCell title={transaction.symbol} />
            <TableBodyCell title={transaction.quantity} />
            <TableBodyCell title={`$ ${transaction.amount}`} />
            <TableBodyCell title={`$ ${transaction.price}`} />
            <TableBodyCell title={transaction.description} />
            <TableCell align="right">

                <Button
                    sx={{ padding: "0px", color: "black" }}
                    onClick={() => handleDelete()}>
                    <DeleteIcon />
                </Button>

            </TableCell>
        </TableRow>
    );
};


export default TransactionLineItem;