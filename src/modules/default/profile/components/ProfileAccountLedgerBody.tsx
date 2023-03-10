import * as React from 'react';
import TableBody from '@mui/material/TableBody';
import useProfileAccounts from "../hooks/useProfileAccounts";
import ProfileAccount from "./ProfileAccount";
import TableRowMessage from '../../common/components/TableItems/TableRowMessage';
import AccountTableEntryForm from '../../../ia/default/forms/AccountTableEntryForm';
import { IAccount } from '../models/IAccount';


interface IProfileAccountLedgerBody {
    id?: string,
    showTableForm:boolean,
    setShowTableForm:(show:boolean)=>void
    showTableEditForm?: boolean
    setShowTableEditForm:(show:boolean)=>void

}


export const ProfileAccountLedgerBody: React.FC<IProfileAccountLedgerBody> = ({ id, showTableForm, setShowTableForm, showTableEditForm }) => {

    const { accounts, error } = useProfileAccounts()

    return (
        <>

            <TableBody>

                {
                    showTableForm ?
                        <AccountTableEntryForm
                            setShowTableForm={setShowTableForm}
                            columns={5}
                        />
                        : ""
                }
                {accounts && accounts.length !== 0 ?
                    accounts.map((row: IAccount) =>
                    (
                        showTableEditForm ?
                            <AccountTableEntryForm
                                setShowTableForm={setShowTableForm}
                                account={row}
                                columns={5}
                            />
                            :
                            <ProfileAccount
                                key={row.id}
                                account={row}
                            />
                    )
                    ) :

                    <TableRowMessage
                        message={error ?? "No records found"}
                        columns={5}
                    />
                }

            </TableBody>
        </>
    );
}
export default ProfileAccountLedgerBody;