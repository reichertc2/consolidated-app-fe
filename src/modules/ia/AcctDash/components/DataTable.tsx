import React from 'react';
import { IGeneralAccountInfo, IPortfolioSpecs, ITopFivePositions } from '../models/IAccountInfo';

interface IAcctGridGeneralProps {
    title?: string
    acctInfo?: IGeneralAccountInfo | ITopFivePositions | IPortfolioSpecs;
}

export const DataTable: React.FC<IAcctGridGeneralProps> = (props: IAcctGridGeneralProps) => {

    return (
        
            <table className=''>
                <thead>
                    <tr
                    className=''>
                        <th>{props.title}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.acctInfo ? (

                            Object.entries(props.acctInfo).map((key) =>
                                <tr 
                                key={`${props.title}-${key[0]}`} 
                                >
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
        
    );
}

export default DataTable;