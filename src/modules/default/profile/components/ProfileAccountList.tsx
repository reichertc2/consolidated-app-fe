import * as React from 'react';
import TableLedger from '../../common/components/TableItems/TableLedger';
import { basicInfoCard } from '../../common/stylesFunctions/common';


interface IProfileAccountList { }


export const ProfileAccountList: React.FC<IProfileAccountList> = () => {
    const headerTitles = ["Account Name", "Institution", "Classification", "Balance"]
    return (

        <section
            className={basicInfoCard()}
        >
            <h3>Financial Accounts Registered</h3>
            <TableLedger
                headerTitles={headerTitles}
                selectedBody={"account"}
            />
        </section>
    );
}
export default ProfileAccountList;