import { IAccount } from "./ProfileAccountList";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ListIcon from '@mui/icons-material/List';
import { Button, TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import AddItemLink from "../../common/components/AddItemLink";
import useDeleteAccount from "../../../ia/default/hooks/useDeleteAccount";
import useUpdateAccount from "../../../ia/default/hooks/useUpdateAccount";
import AccountTableEntryForm from "../../../ia/default/forms/AccountTableEntryForm";

interface IProfileAccountProps {
    account: IAccount,
    
}

export const ProfileAccount: React.FC<IProfileAccountProps> = ({ account }) => {

    const [id, setId] = useState(account.id.toString());
    const [deleteAccount, setDeleteAccount] = useState<IAccount>()
    const [updateAccount, setUpdateAccount] = useState<IAccount>()

    useDeleteAccount(deleteAccount)
    useUpdateAccount(updateAccount)

    function handleDelete() {
        setDeleteAccount(account)
    }

    function handleUpdate() {
        setUpdateAccount(account)
    }

    return (<>
        {/* <AccountTableEntryForm 
        /> */}
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
                <Button onClick={() => handleUpdate()}>
                    <EditIcon />
                </Button>
                <Button onClick={() => handleDelete()}>
                    <DeleteIcon />
                </Button>
            </TableCell>
        </TableRow>
        </>
    );
};


export default ProfileAccount;