import { TableCell, TableRow } from "@mui/material";


interface ITableRowMessage {
  message: string,
  columns: number
  
}

export default function TableRowMessge({ message, columns}: ITableRowMessage) {
  

  return (
    <TableRow>
      <TableCell align="center" colSpan={columns} >{message}</TableCell>
    </TableRow>
  )
}