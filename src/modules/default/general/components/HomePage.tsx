import { Button } from "@mui/material";


interface IHomePage { }

export const HomePage: React.FC<IHomePage> = () => {

    return (
        <section
            className="bg-zinc-200 w-9/12 rounded m-auto mt-60 mb-24"
        >
            <table
                className="w-full m-auto h-1/2"
            >
                <tbody>
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
            <Button
                href="/user/login"
                className="block m-auto w-1/6 my-1"
                >
                Login
            </Button>
        </section>
    );
};


export default HomePage;