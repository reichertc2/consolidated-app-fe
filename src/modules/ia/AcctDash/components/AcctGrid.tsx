import React from 'react';
import { IGeneralAccountInfo } from '../models/IAccountInfo';
import DataTable from './DataTable';

interface IAcctGridGeneralProps {
    acctInfo?: IGeneralAccountInfo;
}

export const AcctGrid: React.FC<IAcctGridGeneralProps> = (props: IAcctGridGeneralProps) => {

    return (
        <section
            className="col-start-1 col-end-2 row-start-1 row-end-3 w-full bg-red-500"
        >
            <DataTable
                title={"Portfolio"}
                acctInfo={props.acctInfo}
            />
        </section>
    );
}

export default AcctGrid;