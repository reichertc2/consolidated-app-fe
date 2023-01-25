import { IRetireProjectedIncome } from '../models/IAccountInfo';



interface IRetireIncProps {
    acctInfo?: IRetireProjectedIncome;
}

export const RetireInc: React.FC<IRetireIncProps> = (props: IRetireIncProps) => {



    return (
        <section className="rowItem" id="RetireInc">
            <table>
                <thead>
                    <tr>
                        <th>Retirement Projections</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>Income</th>
                        <th>ROI</th>
                        <th>Median</th>

                    </tr>
                </thead>
                <tbody>
                    {Object.entries(props).map(([key, value]) =>
                        <tr key={key} >
                            <td>{key}</td>
                            <td>{value["Income"]}</td>
                            <td>{value["ROI"]}</td>
                            <td>{value["Median"]}</td>
                        </tr>
                    )

                    }
                </tbody>
            </table>

        </section>
    );
}
