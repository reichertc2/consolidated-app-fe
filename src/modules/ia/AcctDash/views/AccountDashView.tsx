import { AcctGrid } from '../components/AcctGrid';
import { PortfolioSpecs } from '../components/PortfolioSpecs';
import { ProjVsIdle } from '../components/ProjVsIdle';
import { RetireInc } from '../components/RetireInc';
import { RetireProj } from '../components/RetireProj';
import { SectorBreakout } from '../components/SectorBreakout';
import { TenYearGrowth } from '../components/TenYearGrowth';
import { TopFivePos } from '../components/TopFivePos';
import { IAccountInfo } from '../models/IAccountInfo';


interface IAcctDash { }

export const AccountDashView: React.FC<IAcctDash> = () => {

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
            positionOne: 'TRECX - $  7,645 - 14.4% ',
            positionTwo: 'TRECX - $  7,645 - 14.4% ',
            positionThree: 'TRECX - $  7,645 - 14.4% ',
            positionFour: 'TRECX - $  7,645 - 14.4% ',
            positionFive: 'TRECX - $  7,645 - 14.4% ',
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
        <article
            className='m-4 grid align-top grid-rows-5 gap-2.5 auto-rows-max '
        >

            <AcctGrid acctInfo={acctInfo.general} />
            <TenYearGrowth acctInfo={acctInfo.tenYearGrowth} />
            <TopFivePos acctInfo={acctInfo.topFivePositions} />

            <SectorBreakout acctInfo={acctInfo.sectorBreakout} />
            <ProjVsIdle acctInfo={acctInfo.projectedVsIdle} />
            <PortfolioSpecs acctInfo={acctInfo.portfolioSpecs} />

            <RetireProj acctInfo={acctInfo.retireProjectedValue} />
            <RetireInc acctInfo={acctInfo.retireProjectedIncome} />
        </article>
    );
}

export default AccountDashView;