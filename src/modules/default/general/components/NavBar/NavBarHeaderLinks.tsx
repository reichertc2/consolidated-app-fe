import React from 'react';
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { moduleHeaderLinks } from "../../menu/menu"


interface INavHeaderLinks { }

export const NavHeaderLinks: React.FC<INavHeaderLinks> = () => {

    return (

        <Box sx={{ flexGrow: 5, display: { xs: 'none', md: 'flex' } }}>

            {moduleHeaderLinks.map((page) => (

                <Button
                    key={page.id}
                    className="block my-2 text-zinc-800 text-2xl"
                >
                    <Link
                        className="block my-2 text-zinc-200"
                        to={page.path}
                    >
                        {page.pathName}
                    </Link>
                </Button>

            ))}

        </Box>

    );
};
export default NavHeaderLinks;