import * as React from 'react';
import TableCell from '@mui/material/TableCell';


interface ITableHeaderCell {
    title: string
}


export const TableHeaderCell: React.FC<ITableHeaderCell> = (props: ITableHeaderCell) => {

    return (

        <TableCell sx={{ fontWeight:"bold" }}>{props.title}</TableCell>

    );
}
export default TableHeaderCell;