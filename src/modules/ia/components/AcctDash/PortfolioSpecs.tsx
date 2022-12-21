import { IAccountInfo } from '../../models/IAccountInfo';


interface IPortSpecsProps {
    acctInfo: IAccountInfo;
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
                    {Object.entries(props).map(([key, value]) =>
                        <tr key={key} >
                            <td>{key}</td>
                            <td>{value}</td>
                        </tr>
                    )

                    }
                </tbody>
            </table>
        </section>
    );
}
