import { IRetireProjectedValue } from '../models/IAccountInfo';



interface IRetireProjProps {
    acctInfo?: IRetireProjectedValue;
}

export const RetireProj: React.FC<IRetireProjProps> = (props: IRetireProjProps) => {


    return (
        <section className="">
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
                    {
                        props.acctInfo ?
                            Object.entries(props.acctInfo).map(([key, value]) =>
                                <tr key={key} >
                                    <td>{key}</td>
                                    <td>{value["current"]}</td>
                                    <td>{value["increase"]}</td>
                                    <td>{value["yearBegin"]}</td>
                                </tr>
                            ) : ""

                    }
                </tbody>
            </table>
        </section>
    );
}
