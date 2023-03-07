import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ListIcon from '@mui/icons-material/List';
import { Button, TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import AddItemLink from "../../common/components/AddItemLink";
import useDeleteAccount from "../../../ia/default/hooks/useDeleteAccount";
import useUpdateAccount from "../../../ia/default/hooks/useUpdateAccount";
import TableBodyCell from "../../common/components/TableItems/TableBodyCell";
import { IAccount } from '../models/IAccount';

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
            <TableBodyCell title={account.name} />
            <TableBodyCell title={account.institution} />
            <TableBodyCell title={account.classification} />
            <TableBodyCell title={`$ ${account.balance}`} />
            <TableCell align="right">

                <AddItemLink
                    id={id}
                    path={`/portfolio/ia/account/list_transactions/:id`}
                    customIcon={<ListIcon />}
                />
                <Button
                    sx={{ padding: "0px", color: "black" }}
                    onClick={() => handleUpdate()}>
                    <EditIcon />
                </Button>
                <Button
                    sx={{ padding: "0px", color: "black", width:"fit-content" }}
                    onClick={() => handleDelete()}>
                    <DeleteIcon 
                    sx={{margin:"0px"}}/>
                </Button>
            </TableCell>
        </TableRow>
    </>
    );
};


export default ProfileAccount;