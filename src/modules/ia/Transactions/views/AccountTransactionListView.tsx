import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import useTransactionList from "../hooks/useTransactionList";
import TransactionLedger from "../components/TransactionLedger";
import { useState } from "react";
import FileUploadForm from "../forms/FileUploadForm";
import { basicViewStyle } from "../../../default/common/stylesFunctions/common";
import useProfileAccounts from "../../../default/profile/hooks/useProfileAccounts";


interface IAccountTransactionListViewProps {

}

export const AccountTransactionListView: React.FC<IAccountTransactionListViewProps> = () => {

    const { id } = useParams<string>()

    const { transactions, error } = useTransactionList(Number(id))
    const { accounts } = useProfileAccounts()
    // const account = accounts?.filter((account: IAccount) => account.id === parseInt(id ?? "0")) 


    const [showUploadBox, setShowUploadBox] = useState<boolean>(false)


    return (
        <section
            className={basicViewStyle()}
        >
            <div>
          
                <h3>Transactions </h3>
                <Button
                    onClick={() => setShowUploadBox(!showUploadBox)}>
                    <DriveFolderUploadIcon />
                </Button>
            </div>
            {
                showUploadBox ?
                    <FileUploadForm
                    />
                    : ""
            }
            <TransactionLedger
                id={id}
                error={error}
                transactions={transactions}
            />
        </section>
    );
};


export default AccountTransactionListView;