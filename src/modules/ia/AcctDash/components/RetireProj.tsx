import { IRetireProjectedValue } from '../models/IAccountInfo';



interface IRetireProjProps {
    acctInfo?: IRetireProjectedValue;
}

export const RetireProj: React.FC<IRetireProjProps> = (props: IRetireProjProps) => {

    return (
        <section className="rowItem" id="RetireProj">
            <table>
                <thead>
                    <tr>
                        <th>Retirement Projections</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>Current</th>
                        <th>Increase</th>
                        <th>Year Begin</th>

                    </tr>
                </thead>
                <tbody>
                    {Object.entries(props).map(([key, value]) =>
                        <tr key={key} >
                            <td>{key}</td>
                            <td>{value["Current"]}</td>
                            <td>{value["Increase"]}</td>
                            <td>{value["Year Begin"]}</td>
                        </tr>
                    )

                    }
                </tbody>
            </table>
        </section>
    );
}
