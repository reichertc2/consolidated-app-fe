import * as React from 'react';
import { basicInfoCard } from '../../common/stylesFunctions/common';
import ProfileAccountLedger from './ProfileAccountLedger';


interface IProfileAccountList { }


export const ProfileAccountList: React.FC<IProfileAccountList> = () => {

    return (

        <section
            className={basicInfoCard()}
        >
            <h3>Financial Accounts Registered</h3>
            <ProfileAccountLedger />
        </section>
    );
}
export default ProfileAccountList;