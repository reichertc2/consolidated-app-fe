import { Link } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { portfolioMenuItems, noUserDrawerMenuItems } from "../../menu/menu";
import { useContext } from "react";
import { AppContext } from "../../../../../context/AppContext";



interface INavBarDrawerList { }
export const NavBarDrawerList: React.FC<INavBarDrawerList> = () => {

  const { user } = useContext(AppContext)


  return (
    <List
      className="bg-zinc-700 min-h-screen"
    >

      {user.email ? portfolioMenuItems.map((item, index) => (
        <ListItem key={item.id} disablePadding
        >
          <ListItemButton
          >
            <Link
              to={item.path}
              className="m-0"
            >
              <ListItemIcon >
                {index % 2 === 0 ? <InboxIcon className="inline-block text-zinc-200" /> : <MailIcon className="inline-block text-zinc-200" />}
              </ListItemIcon>
              <ListItemText primary={item.pathName} className="inline-block p-1 text-zinc-200" />
            </Link>
          </ListItemButton>
        </ListItem>
      ))
        :
        noUserDrawerMenuItems.map((item, index) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton>
              <Link to={item.path}
                className="m-0"
              >
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon className="inline-block text-zinc-200" /> : <MailIcon className="inline-block text-zinc-200" />}
                </ListItemIcon>
                <ListItemText primary={item.pathName} className="inline-block p-1 text-zinc-200" />
              </Link>
            </ListItemButton>
          </ListItem>
        ))
      }
    </List>
  );
}

export default NavBarDrawerList;