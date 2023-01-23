import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../forms/LoginForm";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import NavBarHeaderLinks from "../../general/components/NavBar/NavBarHeaderLinks";
import { Drawer } from "@mui/material";

const drawerWidth = 240;


export default function NewUser() {

    const [open, setOpen] = useState(false);

    const handleDrawer = () => {
        if (open === true) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    };
    return (
        <><MuiAppBar >
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


            </Toolbar>
        </MuiAppBar>
            <Drawer
                PaperProps={{
                    sx: {
                        marginTop: '75px'
                        //   height: 240
                    }
                }}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            ></Drawer>
            <div
                style={{
                    width: "50%",
                    marginTop: "10%"
                }}>
                <LoginForm />
                <p>New to the site click <Link to='/user/RegisterEditUser'>here</Link>.</p>
            </div>
        </>

    );
}