import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { ITransaction } from "../models/ITransactions";
import TransactionLineItem from "../components/TransactionLineItem";
import TableRowMessge from "../../../default/common/components/TableRowMessage";
import TransactionTableEntryForm from "../forms/TransactionTableEntryForm";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from "react";
import TableHeaderCell from "../../../default/common/components/TableHeaderCell";


interface ITransactionLedger {
    id?: string,
    error: string,
    transactions: ITransaction[]
}

export const TransactionLedger: React.FC<ITransactionLedger> = ({ id, error, transactions }) => {

    const [showTableForm, setShowTableForm] = useState<boolean>(false)

    const headerTitles = ["Date", "Transaction Type", "Security Type", "Symbol", "Qty", "Amount", "Price", "Description"]

    return (

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>

                        {
                            headerTitles.map((title, idx) =>
                                <TableHeaderCell
                                    key={`${title}-${idx}`}
                                    title={title} />
                            )
                        }

                        <TableCell align="right">

                            <Button
                                sx={{ color: "black" }}
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