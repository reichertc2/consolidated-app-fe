import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import NavBarDrawerList from './NavBarDrawer/NavBarDrawerList';
import MainBody from '../../sections/MainBody';

const drawerWidth = 240;

interface INavBarDrawer {
  open: boolean
}

export const NavBarDrawer: React.FC<INavBarDrawer> = ({ open }: INavBarDrawer) => {

  return (
    <div
      className="bg-zinc-300 flex min-h-screen"
    >
      <Drawer

        PaperProps={{

          sx: {
            marginTop: '4.5%'


          }
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 50,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Divider

        />

        <NavBarDrawerList />
      </Drawer>
      <MainBody />
    </div>
  );
}

export default NavBarDrawer;