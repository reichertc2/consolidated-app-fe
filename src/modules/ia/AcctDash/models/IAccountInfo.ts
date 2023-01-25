export interface IAccountInfo {
    general?: IGeneralAccountInfo;
    tenYearGrowth?: ITenYearGrowth;
    topFivePositions?: ITopFivePositions;
    sectorBreakout?: ISectorBreakout;
    projectedVsIdle?: IProjectedVsIdle;
    portfolioSpecs?: IPortfolioSpecs;
    retireProjectedValue?: IRetireProjectedValue;
    retireProjectedIncome?: IRetireProjectedIncome;
}

export interface IGeneralAccountInfo {
    balance: string;
    income: string;
    securities: string;
    cash: string;
    growth: string;
    deposits: string;

}


export interface ITenYearGrowth {
    tenYearGrowthYear: string[];
    tenYearGrowthValue: number[];
}

export interface ITopFivePositions {
    positionOne: string;
    positionTwo: string;
    positionThree: string;
    positionFour: string;
    positionFive: string;
}


export interface ISectorBreakout {
    sectorName: string[];
    sectorValue: number[];
}

export interface IProjectedVsIdle{
    year: string[];
    projectedValue: number[];
    idleValue: number[];
}

export interface IPortfolioSpecs {
    ytdGrowth: string;
    growthAvg: string;
    freeWkMoIncome: string;
    medianIncome: string;
    caughtUp: string;
}

export interface IRetireProjectedValue {
    projectedValue: IRetireValue;
    idleValue: IRetireValue;

}

export interface IRetireValue {
    current: string;
    increase: string;
    yearBegin: string;
}

export interface IRetireProjectedIncome {
    projectedValue: IRetireIncome;
    idleValue: IRetireIncome;

}

export interface IRetireIncome {
    income: string;
    roi: string;
    median: string;
}