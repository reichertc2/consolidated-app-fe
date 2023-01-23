import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import NavBarDrawerList from '../general/components/NavBarDrawer/NavBarDrawerList';
import MainBody from './MainBody';

const drawerWidth = 240;

interface INavBarDrawer {
  open: boolean
}

export const NavBarDrawer: React.FC<INavBarDrawer> = ({ open }: INavBarDrawer) => {

  return (
    <>
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
    </>
  );
}

export default NavBarDrawer;