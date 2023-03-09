import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import TableRowMessge from "../../../default/common/components/TableItems/TableRowMessage";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from "react";
import TableHeaderCell from "../../../default/common/components/TableItems/TableHeaderCell";
import { ITransaction } from "../../../ia/Transactions/models/ITransactions";
import { TransactionLedgerBody } from "../../../ia/Transactions/components/TransactionLedgerBody";
import ProfileAccountLedgerBody from "../../profile/components/ProfileAccountLedgerBody";


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
        } else if ("account") {
            return <ProfileAccountLedgerBody
                id={id}
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