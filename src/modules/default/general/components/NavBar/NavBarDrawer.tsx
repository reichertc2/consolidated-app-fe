import { useState, useContext, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import NavBarDrawerList from "../NavBarDrawer/NavBarDrawerList";

const drawerWidth = 240;

interface INavBarDrawer {
    openDrawer: boolean | undefined
}

export const NavBarDrawer: React.FC<INavBarDrawer> = ({openDrawer}) => {


    return (
        <Drawer
            PaperProps={{
                sx: {
                    marginTop: "75px",
                    //   height: 240
                },
            }}
            sx={{
                height: "calc(100% - 64px)",
                top: 64,
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                },
            }}
            variant="persistent"
            anchor="left"

            open={openDrawer}
        >
            <Divider />
            <NavBarDrawerList />
        </Drawer>
    );
}

export default NavBarDrawer