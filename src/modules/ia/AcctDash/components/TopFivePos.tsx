import { ITopFivePositions } from '../models/IAccountInfo';



interface ITopFivePosProps {
    acctInfo?: ITopFivePositions;
}

export const TopFivePos: React.FC<ITopFivePosProps> = (props: ITopFivePosProps) => {

    return (
        <section className="basis-1/4">
            <table>
                <thead>
                    <tr>
                        <th>Top Five Positions</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        props.acctInfo ? (Object.entries(props.acctInfo).map((key, value) =>
                            <tr key={key[0]} >

                                <td>{value + 1}. {key[1]}</td>
                            </tr>
                        )) : (
                            <tr>
                                <td>No Data</td>
                            </tr>
                        )


                    }
                </tbody>
            </table>
        </section>
    );
}
