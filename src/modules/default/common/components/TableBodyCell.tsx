import * as React from 'react';
import TableCell from '@mui/material/TableCell';


interface ITableBodyCell {
    title: string | number
}


export const TableBodyCell: React.FC<ITableBodyCell> = (props: ITableBodyCell) => {

    return (

        <TableCell sx={{ padding:"0px 1rem", margin:"0px auto", fontSize:".75rem" }}>{props.title}</TableCell>

    );
}
export default TableBodyCell;