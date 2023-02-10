
import TransactionEntryForm from "../forms/TransactionEntryForm";



interface IAccountEntryView { }

export const AccountEntryView: React.FC<IAccountEntryView> = () => {

    return (
        <section
            className="bg-zinc-200 w-9/12 rounded m-auto my-40"
        >
            <TransactionEntryForm />

        </section>

    );
};


export default AccountEntryView;