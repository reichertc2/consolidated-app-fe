
import { useParams } from "react-router-dom";
import TransactionEntryForm from "../forms/TransactionEntryForm";



interface ITransctionEntryView { }

export const TransactionView: React.FC<ITransctionEntryView> = () => {

    const { acctId } = useParams()

    return (

        <section
            className="bg-zinc-200 w-9/12 rounded m-auto my-40"
        >
            <TransactionEntryForm
                acctId={acctId ?? "0"} />

        </section>

    );
};


export default TransactionView;