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
import { AppContext } from "../../../../../context/AppContext";
import useProfileAccounts from "../../hooks/useProfileAccounts";
import ProfileAccount from "./ProfileAccount";
import Error from "../../components/Error"
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ListIcon from '@mui/icons-material/List';

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
                        <TableCell align="right">Institution</TableCell>
                        <TableCell align="right">Classification</TableCell>
                        <TableCell align="right">Balance</TableCell>
                        <TableCell align="right">
                            <AddIcon />
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {accounts.map((row: IAccount) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>

                            <TableCell align="right">{row.institution}</TableCell>
                            <TableCell align="right">{row.classification}</TableCell>
                            <TableCell align="right">{row.balance}</TableCell>
                            <TableCell align="right">            <ListIcon />
                                <EditIcon />
                                <DeleteIcon />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default ProfileAccountList;