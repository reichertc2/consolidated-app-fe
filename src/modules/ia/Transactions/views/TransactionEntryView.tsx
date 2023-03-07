
import { useParams } from "react-router-dom";
import { basicViewStyle } from "../../../default/common/stylesFunctions/common";
import TransactionEntryForm from "../forms/TransactionEntryForm";



interface ITransctionEntryView { }

export const TransactionView: React.FC<ITransctionEntryView> = () => {

    const {  id } = useParams()
    console.log("TransactionView ",id)
    return (

        <section
           
        >{id ?
            <TransactionEntryForm
                acctId={id} />
            : ""
            }


        </section>

    );
};


export default TransactionView;