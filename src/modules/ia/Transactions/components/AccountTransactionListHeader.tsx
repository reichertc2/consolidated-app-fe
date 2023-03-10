import { Button } from "@mui/material";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from "react";
import FileUploadForm from "../forms/FileUploadForm";
import { IAccount } from "../../../default/profile/models/IAccount";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconItemLink from "../../../default/common/components/IconItemLink";


interface IAccountTransactionListHeaderProps {
    accounts: IAccount[],
    id: string
}

export const AccountTransactionListHeader: React.FC<IAccountTransactionListHeaderProps> = ({ accounts, id }) => {

    const [showUploadBox, setShowUploadBox] = useState<boolean>(false)


    return (
        <div>
            {
                accounts ?
                    accounts.filter((account: IAccount) => parseInt(id ?? "") === account.id).map((acct: IAccount) =>
                    (
                        <>
                            <p>Account:  {acct.name}</p>
                            <p>Institution:  {acct.institution}</p>
                            <p>Classification:  {acct.classification}</p>
                            <p>$  {acct.balance}</p>
                            <IconItemLink
                                id={id ?? ""}
                                path={"/user/profile"}
                                customIcon={<ArrowBackIcon />}
                            />
                        </>
                    ))
                    : ""
            }
            <Button
                onClick={() => setShowUploadBox(!showUploadBox)}>
                <DriveFolderUploadIcon />
            </Button>
            {
                showUploadBox ?
                    <FileUploadForm
                    />
                    : ""
            }
        </div>
    );
};


export default AccountTransactionListHeader;