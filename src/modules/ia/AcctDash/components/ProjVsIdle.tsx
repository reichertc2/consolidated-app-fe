import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {  IProjectedVsIdle } from '../models/IAccountInfo';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Projected v Idle',
        },
    },
};





interface IProjVsIdleProps {
    acctInfo?: IProjectedVsIdle;
}

export const ProjVsIdle: React.FC<IProjVsIdleProps> = (props: IProjVsIdleProps) => {

    //const labels = acctInfo[0];
    //const data = {

    //    labels,
    //    datasets: [
    //        {
    //            label: 'Projected',
    //            data: acctInfo[1],
    //            borderColor: 'rgb(255, 99, 132)',
    //            backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //        },
    //        {
    //            label: 'Idle',
    //            data: acctInfo[2],
    //            borderColor: 'rgb(53, 162, 235)',
    //            backgroundColor: 'rgba(53, 162, 235, 0.5)',
    //        },
    //    ],
    //};
    return (
        <section className="rowItem" id="ProjVsIdle">
            <h1>This is the ProjVsIdle</h1>
            {/*<Line options={options} data={data} />*/}
        </section>
    );
}
