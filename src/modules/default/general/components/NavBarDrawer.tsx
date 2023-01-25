import Drawer from '@mui/material/Drawer';
import NavBarDrawerList from './NavBarDrawer/NavBarDrawerList';
import MainBody from '../../sections/MainBody';

const drawerWidth = 255;

interface INavBarDrawer {
  open: boolean
}

export const NavBarDrawer: React.FC<INavBarDrawer> = ({ open }: INavBarDrawer) => {

  return (
    <div
      className="bg-zinc-300 flex min-h-screen w-full"
    >
      <Drawer

        PaperProps={{
          sx: {
            marginTop: '4%'
          }
        }}
        sx={{
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
        {/* <Divider /> */}

        <NavBarDrawerList />
      </Drawer>
      <MainBody />
    </div>
  );
}

export default NavBarDrawer;