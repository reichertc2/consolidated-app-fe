import { Box, TextField } from "@mui/material";
import lightedforestroad from "../../assets/lightedforestroad.jpg"

interface IHomePage { }

export const HomePage: React.FC<IHomePage> = () => {

    return (
        <Box>


            <Box
                component="img"
                sx={{
                    marginTop: ".5%",
                    width: "100%",
                    opacity: "65%"
                }}
                src={lightedforestroad} />
            <p
            
            > Welcome to the Cosolidated App!!</p>

        </Box>

    );
};


export default HomePage;