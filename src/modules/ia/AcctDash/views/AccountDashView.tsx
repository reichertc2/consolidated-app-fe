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
import Error from "../../../default/common/components/Error"

interface IAcctDash { }

export const AccountDashView: React.FC<IAcctDash> = () => {

  const { acctInfo, error } = useAccountDash()


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
      className='flex flex-row'
    >
      {acctInfo ? (<>
        <div>
          <AcctGrid acctInfo={acctInfo?.general} />
          <SectorBreakout acctInfo={acctInfo?.sectorBreakout} />
          <RetireProj acctInfo={acctInfo?.retireProjectedValue} />
        </div>
        <div>
          <TenYearGrowth acctInfo={acctInfo?.tenYearGrowth} />
          <ProjVsIdle acctInfo={acctInfo?.projectedVsIdle} />
          <RetireInc acctInfo={acctInfo?.retireProjectedIncome} />
        </div>
        <div>
          <TopFivePos acctInfo={acctInfo?.topFivePositions} />
          <PortfolioSpecs acctInfo={acctInfo?.portfolioSpecs} />
        </div>
      </>
      ) : ""}

    </article>
  );
}

export default AccountDashView;