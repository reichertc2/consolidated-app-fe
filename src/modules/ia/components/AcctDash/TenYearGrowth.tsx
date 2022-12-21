import React from 'react';
import { IAccountInfo } from '../../models/IAccountInfo';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
//import { Line } from 'react-chartjs-2';
// import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        // legend: {
        //   position: 'top',
        // },
        title: {
            display: true,
            text: '10 Year Growth',
        },
    },
};





interface ITenYearGrowthProps {
    acctInfo: IAccountInfo;
}

export const TenYearGrowth: React.FC<ITenYearGrowthProps> = (props: ITenYearGrowthProps) => {



    //let labels = acctInfo[0];

    //const data = {
    //    labels,
    //    datasets: [
    //        {
    //            fill: true,
    //            label: 'Balance',
    //            data: acctInfo[1],
    //            borderColor: 'rgb(53, 162, 235)',
    //            backgroundColor: 'rgba(53, 162, 235, 0.5)',
    //        },

    //    ],
    //};
    return (
        <section className="rowItem" id="TenYearGrowth">
            <h1>This is the TenYearGrowth</h1> 
            {/*<Line options={options} data={data} />*/}

        </section>
    );
}
