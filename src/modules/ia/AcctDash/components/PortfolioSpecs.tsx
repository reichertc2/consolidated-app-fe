import { IPortfolioSpecs } from '../models/IAccountInfo';


interface IPortSpecsProps {
    acctInfo?: IPortfolioSpecs;
}

export const PortfolioSpecs: React.FC<IPortSpecsProps> = (props: IPortSpecsProps) => {


    return (
        <section className="rowItem" id="PortfolioSpecs">

            <table>
                <thead>
                    <tr>
                        <th>Portfolio Specs</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    props.acctInfo ? (
                    Object.entries(props.acctInfo).map((key) =>
                        <tr key={key[0]} >
                            <td>{key[0]}</td>
                            <td>{key[1]}</td>
                        </tr>
                    )
                    ): (
                        <tr>
                        <td>No Data</td>
                        <td>No Data</td>
                    </tr>
                    )
                    }
                </tbody>
            </table>
        </section>
    );
}
