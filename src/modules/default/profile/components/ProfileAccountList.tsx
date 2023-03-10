import * as React from 'react';
import TableLedger from '../../common/components/TableItems/TableLedger';
import { basicInfoCard } from '../../common/stylesFunctions/common';
import ProfileAccountLedgerBody from './ProfileAccountLedgerBody';
import { useState } from 'react'


interface IProfileAccountList { }


export const ProfileAccountList: React.FC<IProfileAccountList> = () => {
    const headerTitles = ["Account Name", "Institution", "Classification", "Balance"]

    const [showTableForm, setShowTableForm] = useState<boolean>(false)
    const [showTableEditForm, setShowTableEditForm] = useState<boolean>(false)

    return (

        <section
            className={basicInfoCard()}
        >
            <h3>Financial Accounts Registered</h3>
            <TableLedger
                showTableForm={showTableForm}
                setShowTableForm={setShowTableForm}
                showTableEditForm={showTableEditForm}
                setShowTableEditForm={setShowTableEditForm}
                headerTitles={headerTitles}
                selectedBody={
                    <ProfileAccountLedgerBody
                        showTableForm={showTableForm}
                        setShowTableForm={setShowTableForm}
                        showTableEditForm={showTableEditForm}
                        setShowTableEditForm={setShowTableEditForm}
                    />
                }
            />
        </section>
    );
}
export default ProfileAccountList;