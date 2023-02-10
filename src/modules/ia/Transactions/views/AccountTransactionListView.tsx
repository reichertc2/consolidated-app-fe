import { Box, CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import Error from "../../../default/common/components/Error"
import { ITransaction } from "../models/ITransactions";
import TransactionLineItem from "../components/TransactionLineItem";
import useTransaction from "../hooks/useTransaction";


interface IAccountTransactionListViewProps {

}

export const AccountTransactionListView: React.FC<IAccountTransactionListViewProps> = () => {

    const { id } = useParams()

    // const { transactions, error } = useTransaction(Number(id) ?? 0)


    // if (error) {
    //     return (
    //         <Box sx={{ display: "flex" }}>
    //             <Error>{error}</Error>
    //         </Box>
    //     );
    // }

    // if (!transactions) {
    //     return (
    //         <Box sx={{ display: "flex" }}>
    //             <CircularProgress />
    //         </Box>
    //     );
    // }

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
                        <Link to="/user/profile/add_account">
                            <AddIcon />
                        </Link>
                    </TableCell>
                </TableRow>
            </TableHead>
            {/* <TableBody>
                {
                    transactions.map((row: ITransaction) =>
                    (
                        <TransactionLineItem
                            key={row.id}
                            transaction={row}
                        />
                    )
                    )
                }
            </TableBody> */}
        </Table>
    </TableContainer>

    );
};


export default AccountTransactionListView;