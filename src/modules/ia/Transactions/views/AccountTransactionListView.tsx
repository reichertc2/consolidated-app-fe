import { useParams } from "react-router-dom";
import useTransactionList from "../hooks/useTransactionList";
import { basicViewStyle } from "../../../default/common/stylesFunctions/common";
import useProfileAccounts from "../../../default/profile/hooks/useProfileAccounts";
import TableLedger from "../../../default/common/components/TableItems/TableLedger";
import AccountTransactionListHeader from "../components/AccountTransactionListHeader";
import { useState } from "react";
import StockLedgerBody from "../../IAManager/components/StockLedgerBody";
import TransactionLedgerBody from "../components/TransactionLedgerBody";


interface IAccountTransactionListViewProps {

}

export const AccountTransactionListView: React.FC<IAccountTransactionListViewProps> = () => {

    const headerTitles = ["Date", "Transaction Type", "Security Type", "Symbol", "Qty", "Amount", "Price", "Description"]

    const { id } = useParams<string>()

    const { accounts } = useProfileAccounts()

    const [showTableForm, setShowTableForm] = useState<boolean>(false)
    const [showTableEditForm, setShowTableEditForm] = useState<boolean>(false)

    console.log(accounts)
    return (
        <section
            className={basicViewStyle()}
        >
            <AccountTransactionListHeader
                id={id ?? ""}
                accounts={accounts}

            />

            <TableLedger
                showTableForm={showTableForm}
                setShowTableForm={setShowTableForm}
                showTableEditForm={showTableEditForm}
                setShowTableEditForm={setShowTableEditForm}
                headerTitles={headerTitles}
                selectedBody={
                    <TransactionLedgerBody
                        id={id}
                        showTableForm={showTableForm}
                        setShowTableForm={setShowTableForm}
                        showTableEditForm={showTableEditForm}
                        setShowTableEditForm={setShowTableEditForm}

                    />
                }
            />
        </section>
    );
};


export default AccountTransactionListView;