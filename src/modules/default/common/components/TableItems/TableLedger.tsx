import { Button, Paper, Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import TableHeaderCell from "./TableHeaderCell";


interface ITableLedger {
    headerTitles: string[],
    selectedBody: any
    showTableForm: boolean,
    setShowTableForm: (show: boolean) => void
    showTableEditForm?: boolean
    setShowTableEditForm: (show: boolean) => void
}


export const TableLedger: React.FC<ITableLedger> = ({ headerTitles, selectedBody, showTableForm, setShowTableForm }) => {

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
                    {selectedBody ? selectedBody : ""}
                </>
            </Table>
        </TableContainer>

    );
};


export default TableLedger;