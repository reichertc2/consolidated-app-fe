import { Link } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


const menuItems = [
  {
    id: 1,
    pathName: "Portfolio",
    path: "/portfolio/acct_dash",
    subPaths: [
      {
        id: "a1",
        pathName: "Account Dash",
        path: "/portfolio/acct_dash",
      },
      {
        id: "a2",
        pathName: "Target Portfolio",
        path: "/portfolio/target_portfolio",
      },
      {
        id: "a3",
        pathName: "Reallocation Tool",
        path: "/portfolio/reallocation_tool",
      },
      {
        id: "a4",
        pathName: "Position Tool",
        path: "/portfolio/position_tool",
      },
      {
        id: "a5",
        pathName: "Transactions",
        path: "/portfolio/transactions",
      },
    ],
  },


]


interface INavBarDrawerList { }
export const NavBarDrawerList: React.FC<INavBarDrawerList> = () => {



  return (
    <List>
      {menuItems[0]["subPaths"].map((item, index) => (
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