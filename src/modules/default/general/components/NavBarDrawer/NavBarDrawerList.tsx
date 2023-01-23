import { Link } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { portfolioMenuItems } from "../../menu/menu";



interface INavBarDrawerList { }
export const NavBarDrawerList: React.FC<INavBarDrawerList> = () => {



  return (
    <List>
      {portfolioMenuItems[0]["subPaths"].map((item, index) => (
        <ListItem key={item.id} disablePadding>
          <ListItemButton>
            <Link to={item.path} >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item.pathName} sx={{ padding: "1px" }} />
            </Link>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default NavBarDrawerList;