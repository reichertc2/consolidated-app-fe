import { Box, CircularProgress } from '@mui/material';
import { AcctGrid } from '../components/AcctGrid';
import { PortfolioSpecs } from '../components/PortfolioSpecs';
import { ProjVsIdle } from '../components/ProjVsIdle';
import { RetireInc } from '../components/RetireInc';
import { RetireProj } from '../components/RetireProj';
import { SectorBreakout } from '../components/SectorBreakout';
import { TenYearGrowth } from '../components/TenYearGrowth';
import { TopFivePos } from '../components/TopFivePos';
import useAccountDash from '../hooks/useAccountDash';
import Error from "../../../default/general/components/Error"

interface IAcctDash { }

export const AccountDashView: React.FC<IAcctDash> = () => {

    const {acctInfo,error}= useAccountDash()


    if (error) {
        return (
          <Box sx={{ display: "flex" }}>
            <Error>{error}</Error>
          </Box>
        );
      }

      if (!acctInfo) {
        return (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        );
      }


    return (
        <article
            className='m-4 grid align-top grid-rows-5 gap-2.5 auto-rows-max '
        >
            {acctInfo ? (<>
                <AcctGrid acctInfo={acctInfo?.general} />
                <TenYearGrowth acctInfo={acctInfo?.tenYearGrowth} />
                <TopFivePos acctInfo={acctInfo?.topFivePositions} />

                <SectorBreakout acctInfo={acctInfo?.sectorBreakout} />
                <ProjVsIdle acctInfo={acctInfo?.projectedVsIdle} />
                <PortfolioSpecs acctInfo={acctInfo?.portfolioSpecs} />

                <RetireProj acctInfo={acctInfo?.retireProjectedValue} />
                <RetireInc acctInfo={acctInfo?.retireProjectedIncome} />
            </>
            ) : ""}

        </article>
    );
}

export default AccountDashView;