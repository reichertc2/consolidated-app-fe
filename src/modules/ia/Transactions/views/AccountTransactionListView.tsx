import { useParams } from "react-router-dom";
import useTransactionList from "../hooks/useTransactionList";
import { basicViewStyle } from "../../../default/common/stylesFunctions/common";
import useProfileAccounts from "../../../default/profile/hooks/useProfileAccounts";
import TableLedger from "../../../default/common/components/TableItems/TableLedger";
import AccountTransactionListHeader from "../components/AccountTransactionListHeader";


interface IAccountTransactionListViewProps {

}

export const AccountTransactionListView: React.FC<IAccountTransactionListViewProps> = () => {

    const headerTitles = ["Date", "Transaction Type", "Security Type", "Symbol", "Qty", "Amount", "Price", "Description"]

    const { id } = useParams<string>()

    const { transactions, error } = useTransactionList(Number(id))
    const { accounts } = useProfileAccounts()


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
                id={id}
                error={error}
                transactions={transactions}
                headerTitles={headerTitles}
                selectedBody={"transaction"}
            />
        </section>
    );
};


export default AccountTransactionListView;