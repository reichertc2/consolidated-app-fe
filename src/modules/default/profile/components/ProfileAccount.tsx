import { IAccount } from "./ProfileAccountList";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ListIcon from '@mui/icons-material/List';
import { TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import AddItemLink from "../../common/components/AddItemLink";

interface IProfileAccountProps {
    account: IAccount
}

export const ProfileAccount: React.FC<IProfileAccountProps> = ({ account }) => {

    const [id, setId] = useState(account.id.toString());

    return (

        <TableRow
            key={account.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {account.name}
            </TableCell>

            <TableCell align="right">{account.institution}</TableCell>
            <TableCell align="right">{account.classification}</TableCell>
            <TableCell align="right">{account.balance}</TableCell>
            <TableCell align="right">

                <AddItemLink
                    id={id}
                    path={`/portfolio/ia/account/list_transactions/:id`}
                    customIcon={<ListIcon />}
                />
                <EditIcon />
                <DeleteIcon />
            </TableCell>
        </TableRow>
    );
};


export default ProfileAccount;