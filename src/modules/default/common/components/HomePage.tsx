import { Box, Button, Paper, TextField } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../../../context/AppContext";
import lightedforestroad from "../../assets/lightedforestroad.jpg"

interface IHomePage { }

export const HomePage: React.FC<IHomePage> = () => {
    const { user } = useContext(AppContext)

    const styles = {
        paperContainer: {
            backgroundImage: `url(${lightedforestroad})`,


        }
    }
    return (
        <Paper
            style={styles.paperContainer}
        >
            <Box
                sx={{ 
                    marginTop:"3%",
                    minHeight: "34rem", 
                    color: "white", 
                    fontSize: "3rem", 
                    padding: "2rem", 
                    textAlign: "right", 
                    verticalAlign: "bottom" }}
            >

                Welcome to the Cosolidated App!!
                <Box>
                    {!user.email ?

                        <Button
                            href="/user/login"
                            sx={{
                                backgroundColor:"gray",
                                opacity:".75",
                                color:"black",
                                marginTop:"23rem",
                                width:"5rem",
                                '&:hover': {
                                    opacity:"1",
                                    backgroundColor: '#fff',
                                    color: '#3c52b2',
                                }
                            }}
                        >
                            Login
                        </Button>

                        : ""
                    }
                </Box>
            </Box>

        </Paper>
    );
};


export default HomePage;