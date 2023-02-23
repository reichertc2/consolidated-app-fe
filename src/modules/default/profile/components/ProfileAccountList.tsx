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
import TableRowMessge from '../../common/components/TableRowMessage';
import AccountTableEntryForm from '../../../ia/default/forms/AccountTableEntryForm';
import { useState } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';


interface IProfileAccountList { }

export interface IAccount {
    id: number,
    name: string
    institution: string
    classification: string
    balance: number
}


export const ProfileAccountList: React.FC<IProfileAccountList> = () => {

    const { accounts, error } = useProfileAccounts()

    const [showTableForm, setShowTableForm] = useState<boolean>(false)

    if (error) {
        return (
            <Box sx={{ display: "flex" }}>
                <Error>{error}</Error>
            </Box>
        );
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Account Name</TableCell>
                        <TableCell align="center">Institution</TableCell>
                        <TableCell align="center">Classification</TableCell>
                        <TableCell align="center">Balance</TableCell>
                        <TableCell align="right">

                            <Button
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

                {showTableForm ?

                    <AccountTableEntryForm
                        setShowTableForm={setShowTableForm} />
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
            </Table>
        </TableContainer>
    );
}
export default ProfileAccountList;