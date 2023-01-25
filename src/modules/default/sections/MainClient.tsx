import Box from '@mui/material/Box';
import { useState } from 'react';
import NavBarDrawer from '../general/components/NavBarDrawer';
import NavBar from '../general/components/NavBar';


interface IMainClient { }

export const MainClient: React.FC<IMainClient> = () => {
    const [open, setOpen] = useState(false);

    const handleDrawer = () => {
        if (open === true) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    };

    return (

        <Box
            className="flex w-full min-h-screen"
        >
            <div
                className="mt-16 w-full bg-yellow-900">
                <NavBar
                    handleDrawer={handleDrawer}
                />

                <NavBarDrawer
                    open={open}
                />
            </div>
        </Box>
    );
}
export default MainClient;