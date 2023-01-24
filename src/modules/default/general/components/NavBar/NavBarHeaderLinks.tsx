import React, {useContext} from 'react';
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {moduleHeaderLinks} from "../../menu/menu"
import {AppContext} from '../../../../../context/AppContext';



interface INavHeaderLinks { }

export const NavHeaderLinks: React.FC<INavHeaderLinks> = () => {
    const {user} = useContext(AppContext)

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {moduleHeaderLinks.map((page) => (

                <Button
                    key={page.id}
                    sx={{ my: 2, color: "black", display: "block", fontSize:"1.5rem"}}
                >
                    <Link to={page.path}>
                        {page.pathName}
                    </Link>
                </Button>

            ))}
        </Box>

    );
};
export default NavHeaderLinks;