import TableLedger from "../../../default/common/components/TableItems/TableLedger";
import { basicSectionStyle } from "../../../default/common/stylesFunctions/common";

export default function SymbolManager() {

    const headerTitles: string[] = ["Symbol", "Description", "Last", "Qty", "Sector"]

    return (
        <article className={basicSectionStyle()}>
            Stock Manager
            <TableLedger
                headerTitles={headerTitles}
                selectedBody={"stock"}
            />
        </article>
    );
}
