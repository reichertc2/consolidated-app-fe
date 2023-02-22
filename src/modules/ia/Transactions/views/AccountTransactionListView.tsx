import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { generatePath, Link, useParams } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import Error from "../../../default/common/components/Error"
import { ITransaction } from "../models/ITransactions";
import TransactionLineItem from "../components/TransactionLineItem";
import useTransactionList from "../hooks/useTransactionList";
import TableRowMessge from "../../../default/common/components/TableRowMessage";


interface IAccountTransactionListViewProps {

}

export const AccountTransactionListView: React.FC<IAccountTransactionListViewProps> = () => {

    const { id } = useParams()

    const { transactions, error } = useTransactionList(Number(id))
    console.log("AccountTransactionListView", transactions)


    if (error) {
        return (
            <Box sx={{ display: "flex" }}>
                <Error>{error}</Error>
            </Box>
        );
    }


    return (<>
        <h3>Transactions</h3>
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
                                <Link to={generatePath("/portfolio/ia/add_transaction/:id", { id })}>
                                    <AddIcon />
                                </Link>
                                : ""
                            }

                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {transactions ?
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
    </>
    );
};


export default AccountTransactionListView;