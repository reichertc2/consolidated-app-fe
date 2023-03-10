import * as React from 'react';
import TableBody from '@mui/material/TableBody';
import useProfileAccounts from "../hooks/useProfileAccounts";
import ProfileAccount from "./ProfileAccount";
import TableRowMessage from '../../common/components/TableItems/TableRowMessage';
import AccountTableEntryForm from '../../../ia/default/forms/AccountTableEntryForm';
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