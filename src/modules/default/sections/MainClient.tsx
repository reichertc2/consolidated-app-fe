import Box from '@mui/material/Box';
import { useState } from 'react';
import NavBarDrawer from './NavBarDrawer';
import NavBar from '../components/NavBar';

interface IMainClient { }

export const MainClient: React.FC<IMainClient> = () => {

    const [userLoggedIn, setUserLoggedIn] = useState(false)
    const [open, setOpen] = useState(false);

    const handleDrawer = () => {
        if (open === true) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    };
    
    return (

        <Box sx={{ display: 'flex', width: "100%" }} >

            <NavBar
                handleDrawer={handleDrawer}
                userLoggedIn={userLoggedIn}
            />

            <NavBarDrawer
                open={open} />

        </Box>
    );
}
export default MainClient;