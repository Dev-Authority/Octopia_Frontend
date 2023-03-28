import { React} from 'react';
import { Link } from "react-router-dom";
import "./style.css";
import { Navbar, NavbarText } from 'reactstrap';
import ListItemIcon from "@mui/material/ListItemIcon";
import Badge from "@mui/material/Badge";
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';

import Octopia from "../../Assets/images/Octopia.png"


const UpperNav = () => {

  return (
    <>

      <Navbar className="header_top">
        <div className="header_top_content_left">
          <Link to={"/"}>
            <img
              alt="logo"
              src={Octopia}
              style={{
                height: 40,
                width: 140,
                marginLeft: "30px",
              }}
            />
          </Link>
        </div>
        <div className="header_top_content_center hidden md:flex text-center">
          <NavbarText >
            <p>Bienvenue dans votre espace vendeur</p>
            <p className='font-semibold'>Mehdi IJIKKI (123)</p>
          </NavbarText>
        </div>
        <div className="header_top_content_right hidden sm:flex">
          <ListItemIcon>
            <Badge
              badgeContent={2}
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "azure",
                  padding: 0,
                  fontSize: { xs: ".7rem", sm: ".75rem" },
                  fontWeight: "bold",
                  minWidth: { xs: "auto", sm: "8px" },
                  width: {
                    xs: ".8rem",
                    sm: ".9rem",
                  },
                  height: {
                    xs: ".8rem",
                    sm: ".9rem",
                  },
                  marginRight: 3
                },
              }}
            >
              <NotificationsIcon
                sx={{
                  fontSize: {
                    xs: "1.4em",
                    sm: "1.4em",
                  },
                  color: "azure",
                  marginRight: 3
                }}
              />
            </Badge>
            <SettingsIcon
              sx={{
                fontSize: {
                  xs: "1.4em",
                  sm: "1.4em",
                },
                color: "azure",
                marginRight: 3
              }}
            />
            <HelpIcon
              sx={{
                fontSize: {
                  xs: "1.4em",
                  sm: "1.4em",
                },
                color: "azure",
                marginRight: 3
              }}
            />
          </ListItemIcon>
        </div>

      </Navbar>
    </>
  )
}

export default UpperNav;
