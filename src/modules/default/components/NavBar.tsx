import * as React from 'react';
import {Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';

import MenuIcon from '@mui/icons-material/Menu';

import AdbIcon from '@mui/icons-material/Adb';

import NavBarDrawer from '../sections/NavBarDrawer';


const pages = [
    {
    id: 1,
    pathName: "Portfolio",
        path: "/portfolio/acct_dash",
     subPaths: [
            {
                id: "a1",
                pathName: "Account Dash",
                path: "/portfolio/acct_dash",
            },
            {
                id: "a2",
                pathName: "Target Portfolio",
                path: "/portfolio/target_portfolio",
            },
            {
                id: "a3",
                pathName: "Reallocation Tool",
                path: "/portfolio/reallocation_tool",
            },
            {
                id: "a4",
                pathName: "Position Tool",
                path: "/portfolio/position_tool",
            },
            {
                id: "a5",
                pathName: "Transactions",
                path: "/portfolio/transactions",
            },
        ],
    },
    {
        id: 2,
        pathName: "Reading List",
        path: "/portfolio/acct_dash"
    },
    {
        id: 3,
        pathName: "Temp - User Create",
        path: "/user/RegisterEditUser"
    },
];

const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div>

            <h2>NavBar</h2>
        </div>
    );
};
export default NavBar;
