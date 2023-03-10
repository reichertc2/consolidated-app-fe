import { useState } from "react";
import TableLedger from "../../../default/common/components/TableItems/TableLedger";
import { basicSectionStyle } from "../../../default/common/stylesFunctions/common";
import StockLedgerBody from "./StockLedgerBody";

export default function SymbolManager() {

    const headerTitles: string[] = ["Symbol", "Description", "Last", "Sector"]
    const [showTableForm, setShowTableForm] = useState<boolean>(false)
    const [showTableEditForm, setShowTableEditForm] = useState<boolean>(false)
    
    return (
        <article className={basicSectionStyle()}>
            Stock Manager
            <TableLedger
                showTableForm={showTableForm}
                setShowTableForm={setShowTableForm}
                showTableEditForm={showTableEditForm}
                setShowTableEditForm={setShowTableEditForm}
                headerTitles={headerTitles}
                selectedBody={
                    <StockLedgerBody
                        showTableForm={showTableForm}
                        setShowTableForm={setShowTableForm}
                        showTableEditForm={showTableEditForm}
                        setShowTableEditForm={setShowTableEditForm}
                    />
                }
            />
        </article>
    );
}
