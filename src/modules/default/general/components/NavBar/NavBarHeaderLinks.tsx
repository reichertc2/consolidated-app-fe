import * as React from 'react';
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


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

interface INavHeaderLinks { }

export const NavHeaderLinks: React.FC<INavHeaderLinks> = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (

                <Button
                    key={page.id}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                ><Link to={page.path}>
                        {page.pathName}
                    </Link>
                </Button>

            ))}
        </Box>

    );
};
export default NavHeaderLinks;