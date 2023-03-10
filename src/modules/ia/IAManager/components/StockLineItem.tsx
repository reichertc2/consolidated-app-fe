import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ListIcon from '@mui/icons-material/List';
import { Button, TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import IconItemLink from '../../../default/common/components/IconItemLink';
import useDeleteStock from "../hooks/useDeleteStock"
import useUpdateStock from "../hooks/useUpdateStock";
import TableBodyCell from '../../../default/common/components/TableItems/TableBodyCell';
import { IStock } from '../models/IStock';
import StockTableEntryForm from '../forms/StockTableEntryForm';

interface IStockLineItemProps {
    stock: IStock,

}

export const StockLineItem: React.FC<IStockLineItemProps> = ({ stock }) => {

    const [id] = useState(stock.id ?? "");
    const [deleteStock, setDeleteStock] = useState<IStock>()
    const [updateStock, setUpdateStock] = useState<IStock>()
    const [showTableForm, setShowTableForm] = useState<boolean>(false)


    useDeleteStock(deleteStock)
    useUpdateStock(updateStock)

    function handleDelete() {
        setDeleteStock(stock)
    }

    function handleUpdate() {
        setShowTableForm(true)
        // setUpdateStock(stock)
    }

    return (
        <>
            <TableRow
                key={stock.id ?? ""}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >

                {
                    showTableForm ?
                        <StockTableEntryForm
                            setShowTableForm={setShowTableForm}
                            stock={stock}
                            columns={5}
                        />
                        : <>
                            <TableBodyCell title={stock.symbol} />
                            <TableBodyCell title={stock.description ?? ""} />
                            <TableBodyCell title={`$ ${stock.last ?? ""}`} />
                            <TableBodyCell title={stock.sector ?? ""} />

                            <TableCell align="right">

                                <IconItemLink
                                    id={id.toString() ?? ""}
                                    path={`/portfolio/ia/account/list_transactions/:id`}
                                    customIcon={<ListIcon />}
                                />
                                <Button
                                    sx={{ padding: "0px", color: "black" }}
                                    onClick={() => handleUpdate()}>
                                    <EditIcon />
                                </Button>
                                <Button
                                    sx={{ padding: "0px", color: "black", width: "fit-content" }}
                                    onClick={() => handleDelete()}>
                                    <DeleteIcon
                                        sx={{ margin: "0px" }} />
                                </Button>
                            </TableCell>
                        </>
                }
            </TableRow>
        </>
    );
};


export default StockLineItem;