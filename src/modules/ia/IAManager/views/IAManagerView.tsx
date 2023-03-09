import { basicViewStyle } from "../../../default/common/stylesFunctions/common";
import SymbolManager from "../components/SymbolManger";

export default function IAManagerView() {


    return (
        <article className={basicViewStyle()}>
            Transactions

            <SymbolManager />
        </article>
    );
}
