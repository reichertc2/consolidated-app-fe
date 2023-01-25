import { ITopFivePositions } from '../models/IAccountInfo';



interface ITopFivePosProps {
    acctInfo?: ITopFivePositions;
}

export const TopFivePos: React.FC<ITopFivePosProps> = (props: ITopFivePosProps) => {

    return (
        <section className="rowItem" id="TopFivePos">
            {/* <h1>This is the AcctGrid</h1> */}
            <table>
                <thead>
                    <tr>
                        <th>Top Five Positions</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(props).map((key, value) =>
                        <tr key={key.toString()} >

                            <td>{value}</td>
                        </tr>
                    )

                    }
                </tbody>
            </table>
        </section>
    );
}
