import React from 'react';
import { IGeneralAccountInfo } from '../models/IAccountInfo';
import DataTable from './DataTable';

interface IAcctGridGeneralProps {
    acctInfo?: IGeneralAccountInfo;
}

export const AcctGrid: React.FC<IAcctGridGeneralProps> = (props: IAcctGridGeneralProps) => {

    return (
        <section
            className="basis-1/4"
        >
            <DataTable
                title={"Portfolio"}
                acctInfo={props.acctInfo}
            />
        </section>
    );
}

export default AcctGrid;