import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { ITransaction } from "../models/ITransactions";
import TransactionLineItem from "../components/TransactionLineItem";
import TableRowMessge from "../../../default/common/components/TableRowMessage";
import TransactionTableEntryForm from "../forms/TransactionTableEntryForm";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from "react";


interface ITransactionLedger {
    id?: string,
    error: string,
    transactions: ITransaction[]
}

export const TransactionLedger: React.FC<ITransactionLedger> = ({ id, error, transactions }) => {

    const [showTableForm, setShowTableForm] = useState<boolean>(false)


    return (

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell align="center">Transaction Type</TableCell>
                        <TableCell align="center">Security Type</TableCell>
                        <TableCell align="center">Symbol</TableCell>
                        <TableCell align="center">Qty</TableCell>
                        <TableCell align="center">Amount</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">Description</TableCell>
                        <TableCell align="right">

                            <Button
                                onClick={() => {
                                    console.log("showTableForm", showTableForm)
                                    setShowTableForm(!showTableForm)
                                }}>
                                {showTableForm ?
                                    <RemoveIcon /> :
                                    <AddIcon />
                                }
                            </Button>

                        </TableCell>
                    </TableRow>
                </TableHead>

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
            </Table>
        </TableContainer>

    );
};


export default TransactionLedger;