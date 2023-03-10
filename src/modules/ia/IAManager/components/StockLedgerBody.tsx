import * as React from 'react';
import TableBody from '@mui/material/TableBody';
import TableRowMessage from '../../../default/common/components/TableItems/TableRowMessage';
import StockLineItem from './StockLineItem';
import { IStock } from '../models/IStock';
import useGetAllStocks from '../hooks/useGetAllStocks';
import StockTableEntryForm from '../forms/StockTableEntryForm';


interface IProfileAccountLedgerBody {
    id?: string,
    showTableForm:boolean,
    setShowTableForm:(show:boolean)=>void
    showTableEditForm?: boolean
    setShowTableEditForm:(show:boolean)=>void

}


export const StockLedgerBody: React.FC<IProfileAccountLedgerBody> = ({ id, showTableForm, setShowTableForm }) => {

    const { stocks, error } = useGetAllStocks()

    return (
        <>
            {
                showTableForm ?
                    <StockTableEntryForm
                        setShowTableForm={setShowTableForm}
                        columns={5}
                    />
                    : ""

            }

            <TableBody>
                {stocks && stocks.length !== 0 ?
                    stocks.map((row: IStock) =>
                    (
                        showTableForm ?
                            <StockTableEntryForm
                                setShowTableForm={setShowTableForm}
                                stock={row}
                                columns={5}
                            /> :
                            <StockLineItem
                                key={row.symbol}
                                stock={row}
                            />

                    )
                    ) :
                    <TableRowMessage
                        message={error ?? "No records found"}
                        columns={5}
                    />
                }

            </TableBody>
        </>
    );
}
export default StockLedgerBody;