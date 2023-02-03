import { IAccount } from "./ProfileAccountList";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ListIcon from '@mui/icons-material/List';

interface IProfileAccountProps {
    account: IAccount
}

export const ProfileAccount: React.FC<IProfileAccountProps> = ({ account }) => {

    return (

        <div
        className="flex-initial">
            <h4
            >
                {account.name}
            </h4>
            <div
            >
                {account.institution}
                {account.classification}
                {account.balance}
            </div>
            <ListIcon />
            <EditIcon />
            <DeleteIcon />
            
        </div>
    );
};


export default ProfileAccount;