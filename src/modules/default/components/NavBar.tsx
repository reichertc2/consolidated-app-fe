import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import NavBarHeaderLinks from './NavBar/NavBarHeaderLinks';
import NavBarDropDownMenu from './NavBar/NavBarDropDownMenu';

interface INavBar {
    handleDrawer: () => void
    userLoggedIn: boolean
}

export const NavBar: React.FC<INavBar> = ({ handleDrawer, userLoggedIn }: INavBar) => {


    return (
        <MuiAppBar >
            <Toolbar
                sx={{ justifyContent: "space-between" }}
            >
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawer}
                >
                    <MenuIcon />
                </IconButton>
                <h2>Consolidated App</h2>

                {userLoggedIn ?
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
