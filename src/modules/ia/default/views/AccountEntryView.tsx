
import { basicViewStyle } from "../../../default/common/stylesFunctions/common";
import AccountEntryForm from "../forms/AccountEntryForm";



interface IAccountEntryView { }

export const AccountEntryView: React.FC<IAccountEntryView> = () => {

    return (
        <section
            className={basicViewStyle()}
        >
            <AccountEntryForm />

        </section>

    );
};


export default AccountEntryView;