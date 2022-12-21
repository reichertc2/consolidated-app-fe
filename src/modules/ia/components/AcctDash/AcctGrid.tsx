import React from 'react';
import { IAccountInfo } from '../../models/IAccountInfo';

interface IAcctGridProps {
    acctInfo: IAccountInfo;
}

export const AcctGrid: React.FC<IAcctGridProps> = (props: IAcctGridProps) => {



    // let acctInfo = { "Balance": 53141, "Income": 2210 };

    return (
        <section className="rowItem" id="AcctGrid">
            {/* <h1>This is the AcctGrid</h1> */}
            <table>
                <thead>
                    <tr>
                        <th>Investment Portfolio</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(props).map(([key, value]) =>
                        <tr key={key} >
                            <td>{key}</td>
                            <td>{value}</td>
                        </tr>
                    )

                    }
                </tbody>
            </table>
        </section>
    );
}
