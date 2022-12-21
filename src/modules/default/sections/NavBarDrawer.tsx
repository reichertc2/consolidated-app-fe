import { useState } from 'react'; 
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NavBarDrawerList from '../components/NavBar/NavBarDrawerList';
import NavBarHeaderLinks from '../components/NavBar/NavBarHeaderLinks';
import NavBarDropDownMenu from '../components/NavBar/NavBarDropDownMenu';
import Footer from './Footer';
import MainBody from './MainBody';


const drawerWidth = 240;

export default function NavBarDrawer() {
  const [open, setOpen] = useState(true);

  const handleDrawer = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <Box sx={{ display: 'flex', width: "100%" }}>
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
          <NavBarHeaderLinks />
          <NavBarDropDownMenu />
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
      >
        <Divider />
        <NavBarDrawerList />
      </Drawer>
      <MainBody />
    </Box>
  );
}
