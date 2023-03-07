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
import TableHeaderCell from '../../common/components/TableHeaderCell';
import { IAccount } from '../models/IAccount';


interface IProfileAccountLedger { }




export const ProfileAccountLedger: React.FC<IProfileAccountLedger> = () => {

    const { accounts, error } = useProfileAccounts()

    const [showTableForm, setShowTableForm] = useState<boolean>(false)

    const headerTitles = ["Account Name", "Institution", "Classification", "Balance"]


    if (error) {
        return (
            <Box sx={{ display: "flex" }}>
                <Error>{error}</Error>
            </Box>
        );
    }

    return (
        <TableContainer
            component={Paper}
            sx={{
                width: "75%",
                marginTop:"1%",
                
            }}
        >
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>

                        {
                            headerTitles.map((title, idx) =>
                                <TableHeaderCell
                                    key={`${title}-${idx}`}
                                    title={title}
                                />)
                        }

                        <TableCell align="right">

                            <Button
                                sx={{ color: "black" }}
                                onClick={() => {
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
                    // setShowTableForm={setShowTableForm} 
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
            </Table>
        </TableContainer>
    );
}
export default ProfileAccountLedger;