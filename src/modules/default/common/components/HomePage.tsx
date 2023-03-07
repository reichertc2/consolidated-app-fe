import { Button } from "@mui/material";


interface IHomePage { }

export const HomePage: React.FC<IHomePage> = () => {

    return (
        <table
            className="w-full m-auto h-1/2"
            
        >
            <tbody 
            >
                <tr>
                    <td
                        className="m-auto w-6/12 text-2xl p-3 align-top"
                    >
                        Welcome to the Cosolidated App!!
                    </td>
                    <td
                        className="m-auto w-6/12 text-2xl p-3 align-baseline text-end"
                    >
                        Your one stop shop for all your Personal needs.
                    </td>
                </tr>
            </tbody>
        </table>




    );
};


export default HomePage;