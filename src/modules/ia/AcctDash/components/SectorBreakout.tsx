import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { ISectorBreakout } from '../models/IAccountInfo';
import { Pie } from 'react-chartjs-2';



ChartJS.register(ArcElement, Tooltip, Legend);

interface ISectorBreakoutProps {
    acctInfo?: ISectorBreakout;
}

let defaultProps: ISectorBreakout = {
    "sectorName": [
        'Basic Materials',
        'Bonds',
        'Cash',
        'Consumer Cyclicals',
        'Consumer Non-Cyclicals',
        'Energy',
        'Financials',
        'Healthcare',
        'Industrials',
        'Real Estate',
        'Technology',
        'Telecommunications',
        'Utilities',
    ],
    "sectorValue": [
        10,
        15,
        0,
        5,
        11,
        14,
        4,
        8,
        8,
        0,
        6,
        11,
        8,
    ],
}


export const SectorBreakout: React.FC<ISectorBreakoutProps> = (props: ISectorBreakoutProps) => {


    let info


    if (props.acctInfo === undefined) {
        info = defaultProps
    } else {
        info = props.acctInfo
    }

    const data = {
       labels: info["sectorName"],
       datasets: [
           {
               label: '# of Votes',
               data: info["sectorValue"],
               backgroundColor: [
                   'rgba(255, 99, 132, 0.2)',
                   'rgba(54, 162, 235, 0.2)',
                   'rgba(255, 206, 86, 0.2)',
                   'rgba(75, 192, 192, 0.2)',
                   'rgba(153, 102, 255, 0.2)',
                   'rgba(255, 159, 64, 0.2)',
               ],
               borderColor: [
                   'rgba(255, 99, 132, 1)',
                   'rgba(54, 162, 235, 1)',
                   'rgba(255, 206, 86, 1)',
                   'rgba(75, 192, 192, 1)',
                   'rgba(153, 102, 255, 1)',
                   'rgba(255, 159, 64, 1)',
               ],
               borderWidth: 1,
           },
       ],
    };
    return (
        <section className="" >
            <Pie data={data} />
        </section>
    );
}
