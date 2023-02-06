import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, CircularProgress } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../../../context/AppContext";
import useProfileAccounts from "../hooks/useProfileAccounts";
import ProfileAccount from "./ProfileAccount";
import Error from "../../common/components/Error"
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

interface IProfileAccountList { }

export interface IAccount {
    id: number,
    name: string
    institution: string
    classification: string
    balance: number
}


export const ProfileAccountList: React.FC<IProfileAccountList> = () => {

    const { user } = useContext(AppContext)
    const { accounts, error } = useProfileAccounts()


    if (error) {
        return (
            <Box sx={{ display: "flex" }}>
                <Error>{error}</Error>
            </Box>
        );
    }

    if (!accounts) {
        return (
            <Box sx={{ display: "flex" }}>
                <CircularProgress />
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
                            <Link to="/user/profile/add_account">
                                <AddIcon />
                            </Link>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {accounts.map((row: IAccount) => (
                        <ProfileAccount
                            key={row.id}
                            account={row}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default ProfileAccountList;