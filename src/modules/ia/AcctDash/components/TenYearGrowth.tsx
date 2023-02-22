import React from 'react';
import { ITenYearGrowth } from '../models/IAccountInfo';
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
import { Line } from 'react-chartjs-2';


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
    maintainAspectRatio: false,
    plugins: {
        title: {
            display: true,
            text: '10 Year Growth',
        },
    },

};


let defaultProps: ITenYearGrowth = {
    "tenYearGrowthYear": [
        '2012',
        '2013',
        '2014',
        '2015',
        '2016',
        '2017',
        '2018',
        '2019',
        '2020',
        '2021',
        '2022',
    ],
    "tenYearGrowthValue": [
        30000,
        30000,
        30000,
        30000,
        30000,
        30000,
        30000,
        30000,
        30000,
        30000,
        30000,
    ],
}

interface ITenYearGrowthProps {
    acctInfo?: ITenYearGrowth;
}


export const TenYearGrowth: React.FC<ITenYearGrowthProps> = (props: ITenYearGrowthProps) => {


    let info


    if (props.acctInfo === undefined) {
        info = defaultProps
    } else {
        info = props.acctInfo
    }

    const labels: string[] = info["tenYearGrowthYear"]

    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: 'Balance',
                data: info["tenYearGrowthValue"],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },

        ],
    };

    return (
        <section className='basis-1/2 bg-slate-600'
        >
            <Line
                options={options}
                data={data}

            />

        </section>
    );
}
