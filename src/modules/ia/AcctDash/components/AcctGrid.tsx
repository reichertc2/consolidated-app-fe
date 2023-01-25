import React from 'react';
import { IGeneralAccountInfo } from '../models/IAccountInfo';

interface IAcctGridGeneralProps {
    acctInfo?: IGeneralAccountInfo;
}

export const AcctGrid: React.FC<IAcctGridGeneralProps> = (props: IAcctGridGeneralProps) => {

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
                    {
                        props.acctInfo ? (

                            Object.entries(props.acctInfo).map((key) =>
                                <tr key={key[0]} >
                                    <td>{key[0]}</td>
                                    <td>{key[1]}</td>
                                </tr>
                            )
                        ) : (
                            <tr>
                                <td>No Data</td>
                                <td>No Data</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </section>
    );
}

export default AcctGrid;