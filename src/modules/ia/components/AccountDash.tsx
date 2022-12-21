import { AcctGrid } from './AcctDash/AcctGrid';
import { PortfolioSpecs } from './AcctDash/PortfolioSpecs';
import { ProjVsIdle } from './AcctDash/ProjVsIdle';
import { RetireInc } from './AcctDash/RetireInc';
import {RetireProj} from './AcctDash/RetireProj';
import { SectorBreakout } from './AcctDash/SectorBreakout';
import { TenYearGrowth } from './AcctDash/TenYearGrowth';
import { TopFivePos } from './AcctDash/TopFivePos';

import { IAccountInfo } from '../models/IAccountInfo';


export default function AccountDash() {

    let acctInfo: IAccountInfo = {
        general: {
            balance: '$  53,141',
            income: '$   2,210',
            securities: '$  53,141',
            cash: '$    52',
            growth: '64.06 %',
            deposits: '$  3,425',
        },
        tenYearGrowth: {
            tenYearGrowthYear: [
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
            tenYearGrowthValue: [
                0,
                0,
                0,
                30000,
                15000,
                20000,
                21000,
                21000,
                20000,
                37000,
                53000,
            ],
        },
        topFivePositions: {
            positionOne: {
                id: "1.",
                position: 'TRECX - $  7,645 - 14.4% ',
            },
            positionTwo: {
                id: "2.",
                position: 'TRECX - $  7,645 - 14.4% ',
            },
            positionThree: {
                id: "3.",
                position: 'TRECX - $  7,645 - 14.4% ',
            },
            positionFour: {
                id: "4.",
                position: 'TRECX - $  7,645 - 14.4% ',
            },
            positionFive: {
                id: "5.",
                position: 'TRECX - $  7,645 - 14.4% ',
            },
        },
        sectorBreakout: {
            sectorName: [
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
            sectorValue: [
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
        },

        projectedVsIdle: {
            year: [
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
            projectedValue: [
                10,
                15,
                20,
                25,
                30,
                35,
                40,
                45,
                50,
                55,

            ],
            idleValue: [
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
        },
        portfolioSpecs: {
            ytdGrowth: '$ 11,020 / 26.6 %',
            growthAvg: '$ 11,020 / 26.6 %',
            freeWkMoIncome: '37.1 %',
            medianIncome: 'DR Congo',
            caughtUp: '29.5 %',
        },

        retireProjectedValue: {
            projectedValue: {
                current: '$ 1,434,175',
                increase: '23.8 %',
                yearBegin: '$ 1,158,021',
            },
            idleValue: {
                current: '$   416,537',
                increase: '4.4 %',
                yearBegin: '$  399,017',
            }
        },
        retireProjectedIncome: {
            projectedValue: {
                income: '$ 41,709',
                roi: '2.91 %',
                median: 'Canada',
            },
            idleValue: {
                income: '$ 17,211',
                roi: '4.13 %',
                median: 'Croatia',
            },
        }

        
        

    };

    return (
        <article className='gridWrapper'>
            <AcctGrid acctInfo={acctInfo} />
            <TenYearGrowth acctInfo={acctInfo} />
            <TopFivePos acctInfo={acctInfo} />

            <SectorBreakout acctInfo={acctInfo} />
            <ProjVsIdle acctInfo={acctInfo} />
            <PortfolioSpecs acctInfo={acctInfo} />

            <RetireProj acctInfo={acctInfo} />
            <RetireInc acctInfo={acctInfo} />
        </article>
    );
}
