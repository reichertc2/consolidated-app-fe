import { Button, Paper, Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from "react";
import TableHeaderCell from "./TableHeaderCell";
import { ITransaction } from "../../../../ia/Transactions/models/ITransactions";
import { TransactionLedgerBody } from "../../../../ia/Transactions/components/TransactionLedgerBody";
import ProfileAccountLedgerBody from "../../../profile/components/ProfileAccountLedgerBody";
import StockLedgerBody from "../../../../ia/IAManager/components/StockLedgerBody";


interface ITableLedger {
    id?: string,
    error?: string,
    transactions?: ITransaction[],
    headerTitles: string[],
    selectedBody: string
}


export const TableLedger: React.FC<ITableLedger> = ({ id, error, transactions, headerTitles, selectedBody }) => {

    const [showTableForm, setShowTableForm] = useState<boolean>(false)

    const renderTableBody = (selectedBody: string) => {
        if (selectedBody === "transaction") {
            return <TransactionLedgerBody
                id={id}
                error={error ?? ""}
                setShowTableForm={setShowTableForm}
                showTableForm={showTableForm}
                transactions={transactions}

            />
        } else if (selectedBody === "account") {
            return <ProfileAccountLedgerBody
                id={id}
                setShowTableForm={setShowTableForm}
                showTableForm={showTableForm}
            />
        } else if (selectedBody === "stock") {
            return <StockLedgerBody
                setShowTableForm={setShowTableForm}
                showTableForm={showTableForm}
            />
        } else {
            return
        }

    }

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
                <>
                    {renderTableBody(selectedBody)}
                </>
            </Table>
        </TableContainer>

    );
};


export default TableLedger;