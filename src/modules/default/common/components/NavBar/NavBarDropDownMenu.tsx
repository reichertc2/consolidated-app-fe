import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { userDropdownMenuItems } from "../../menu/menu"
import { Link } from 'react-router-dom';


interface INavBarDropDownMenu { }

export const NavBarDropDownMenu: React.FC<INavBarDropDownMenu> = () => {

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (


        <Box
            className="grow-0"
        >
            <Tooltip
                title="Open settings">
                <IconButton
                    className="p-0"
                    onClick={handleOpenUserMenu}
                >
                    <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/2.jpg"
                    />
                </IconButton>
            </Tooltip>
            <Menu
                className="mt-11"
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {userDropdownMenuItems.map((path) => (
                    <MenuItem
                        key={path.id}
                        onClick={handleCloseUserMenu}
                    >
                        <Link to={path.path} >
                            <Typography
                                textAlign="center">
                                {path.pathName}
                            </Typography>
                        </Link>
                    </MenuItem>
                ))}
            </Menu>
        </Box >

    );
};
export default NavBarDropDownMenu;
