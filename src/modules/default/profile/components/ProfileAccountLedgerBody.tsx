import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button } from "@mui/material";
import useProfileAccounts from "../hooks/useProfileAccounts";
import ProfileAccount from "./ProfileAccount";
import Error from "../../common/components/Error"
import AddIcon from '@mui/icons-material/Add';
import TableRowMessge from '../../common/components/TableItems/TableRowMessage';
import AccountTableEntryForm from '../../../ia/default/forms/AccountTableEntryForm';
import { useState } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import TableHeaderCell from '../../common/components/TableItems/TableHeaderCell';
import { IAccount } from '../models/IAccount';


interface IProfileAccountLedgerBody { 
    id?: string,
    showTableForm: boolean,
    setShowTableForm: (show: boolean) => void,
    
}




export const ProfileAccountLedgerBody: React.FC<IProfileAccountLedgerBody> = ({ id, showTableForm, setShowTableForm }) => {

    const { accounts, error } = useProfileAccounts()







    return (
<>

                {showTableForm ?

                    <AccountTableEntryForm
                    setShowTableForm={setShowTableForm} 
                    />
                    : ""
                }
                <TableBody>
                    {accounts && accounts.length !== 0 ?
                        accounts.map((row: IAccount) =>
                        (
                            <ProfileAccount
                                key={row.id}
                                account={row}
                            />
                        )
                        ) :
                        <TableRowMessge
                            message={error ?? "No records found"}
                            columns={5}
                        />
                    }

                </TableBody>
                </>
    );
}
export default ProfileAccountLedgerBody;