import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';
import NavBarHeaderLinks from '../components/NavBar/NavBarHeaderLinks';
import NavBarDropDownMenu from '../components/NavBar/NavBarDropDownMenu';
import { useContext } from 'react';
import { AppContext } from '../../../../context/AppContext';

interface INavBar {
    handleDrawer: () => void
}

export const NavBar: React.FC<INavBar> = ({ handleDrawer }: INavBar) => {

    const { user } = useContext(AppContext)

    return (
        <MuiAppBar
            className="flex"
        >
            <Toolbar
                className="flex-none justify-between bg-zinc-700 w-full"
            >
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawer}
                >

                    <MenuIcon />

                </IconButton>

                <h2
                    className="flex-1"
                >
                    Consolidated App
                </h2>

                {user.email ?
                    <>
                        <NavBarHeaderLinks />
                        <NavBarDropDownMenu />
                    </>

                    : ""}

            </Toolbar>
        </MuiAppBar>
    );
};

export default NavBar;
