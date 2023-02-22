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
import { Line } from 'react-chartjs-2';

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
    maintainAspectRatio: false,

    plugins: {

        title: {
            display: true,
            text: 'Projected v Idle',
        },
    },
};


let defaultProps = {
    "year": [
        '2023',
        '2024',
        '2025',
        '2026',
        '2027',
        '2028',
        '2029',
        '2030',
        '2031',
        '2032',

    ],
    "projectedValue": [
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,

    ],
    "idleValue": [
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,

    ],
}


interface IProjVsIdleProps {
    acctInfo?: IProjectedVsIdle;
}

export const ProjVsIdle: React.FC<IProjVsIdleProps> = (props: IProjVsIdleProps) => {


   let info


    if (props.acctInfo === undefined) {
        info = defaultProps
    } else {
        info = props.acctInfo
    }

    const labels = info["year"];
    const data = {

       labels,
       datasets: [
           {
               label: 'Projected',
               data: info["projectedValue"],
               borderColor: 'rgb(255, 99, 132)',
               backgroundColor: 'rgba(255, 99, 132, 0.5)',
           },
           {
               label: 'Idle',
               data: info["idleValue"],
               borderColor: 'rgb(53, 162, 235)',
               backgroundColor: 'rgba(53, 162, 235, 0.5)',
           },
       ],
    };
    return (
        <section className=""> 
            <Line options={options} data={data} />
        </section>
    );
}
