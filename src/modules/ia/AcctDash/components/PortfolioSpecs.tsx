import { IPortfolioSpecs } from '../models/IAccountInfo';
import DataTable from './DataTable';


interface IPortSpecsProps {
    acctInfo?: IPortfolioSpecs;
}

export const PortfolioSpecs: React.FC<IPortSpecsProps> = (props: IPortSpecsProps) => {


    return (
        <section
            className=""
        >

            <DataTable
                title={"Portfolio Specs"}
                acctInfo={props.acctInfo}
            />

        </section>
    );
}
