
import { useParams } from "react-router-dom";
import TransactionEntryForm from "../forms/TransactionEntryForm";



interface ITransctionEntryView { }

export const TransactionView: React.FC<ITransctionEntryView> = () => {

    const {  id } = useParams()
    console.log("TransactionView ",id)
    return (

        <section
            className="bg-zinc-200 w-9/12 rounded m-auto my-40"
        >{id ?
            <TransactionEntryForm
                acctId={id} />
            : ""
            }


        </section>

    );
};


export default TransactionView;