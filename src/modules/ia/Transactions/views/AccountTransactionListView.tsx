import { Box, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import Error from "../../../default/common/components/Error"
import useTransactionList from "../hooks/useTransactionList";
import TransactionLedger from "../components/TransactionLedger";
import { useState } from "react";
import FileUploadForm from "../forms/FileUploadForm";


interface IAccountTransactionListViewProps {

}

export const AccountTransactionListView: React.FC<IAccountTransactionListViewProps> = () => {

    const { id } = useParams<string>()

    const { transactions, error } = useTransactionList(Number(id))
    const [showUploadBox, setShowUploadBox] = useState<boolean>(false)


    return (<>
        <div>
            <h3>Transactions</h3>
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
    </>
    );
};


export default AccountTransactionListView;