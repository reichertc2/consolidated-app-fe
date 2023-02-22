import { IRetireProjectedIncome } from '../models/IAccountInfo';



interface IRetireIncProps {
    acctInfo?: IRetireProjectedIncome;
}

export const RetireInc: React.FC<IRetireIncProps> = (props: IRetireIncProps) => {



    return (
        <section className="" >
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
                    {props.acctInfo ?
                        Object.entries(props.acctInfo).map(([key, value]) =>
                            <tr key={key} >
                                <td>{key}</td>
                                <td>{value["income"]}</td>
                                <td>{value["roi"]}</td>
                                <td>{value["median"]}</td>
                            </tr>
                        ) : ""

                    }
                </tbody>
            </table>

        </section>
    );
}
