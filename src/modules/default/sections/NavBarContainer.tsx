import { useState, useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NavBarHeaderLinks from "../common/components/NavBar/NavBarHeaderLinks";
import NavBarDropDownMenu from "../common/components/NavBar/NavBarDropDownMenu";
import NavBarDrawer from "../common/components/NavBar/NavBarDrawer";
import { AppContext } from "../../../context/AppContext";


export default function NavBarContainer() {
  const [open, setOpen] = useState<boolean | undefined>(false);
  const { user } = useContext(AppContext);

  const handleDrawer = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  useEffect(() => {
    if (user.email) {
      setOpen(true);
    }
  }, []);

  return (
    <>
      <Box
        className="flex w-full bg-red-500 min-h-fit"
      >
        <MuiAppBar>
          <Toolbar
            className="justify-between"
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawer}
            >
              <MenuIcon />
            </IconButton>

            <NavBarHeaderLinks />
            {user.email ? <NavBarDropDownMenu /> : ""}
          </Toolbar>
        </MuiAppBar>

        <NavBarDrawer openDrawer={open} />

      </Box>

    </>
  );
}