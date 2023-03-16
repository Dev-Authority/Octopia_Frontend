import {React, useState} from 'react'
import "./style.css"
import { Navbar, NavbarText } from 'reactstrap';
import ListItemIcon from "@mui/material/ListItemIcon";
import Badge from "@mui/material/Badge";
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import MenuOutlined from '@mui/icons-material/Menu';

import MenuItems from './MenuItems';
import Octopia from "../../Assets/images/Octopia.png"


const Header = () => {

  const [active, setActive] = useState(false)

  const showMenu = () => {
    setActive(!active)
  }

  return (
    <>
    
      <Navbar className="header_top">
        <div className="header_top_content_left">
          <img
            alt="logo"
            src={Octopia}
            style={{
              height: 50,
              width: 180,
            }}
          />
        </div>
        <div className="header_top_content_center hidden md:flex">
          <NavbarText >
            Bienvenue dans votre espace vendeur
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


      <Navbar className="header_bottom w-full text-white  justify-between ">

        <div className='absolute right-6 md:hidden scale-120'>
          <MenuOutlined onClick={showMenu} className='scale-150 cursor-pointer' />
        </div>

        <ul className='hidden md:flex gap-9 center_element'>
          <li>Products</li>
          <li>Commandes</li>
          <li>Finance</li>
          <li>Rapports</li>
          <li>Seller Performance</li>
          <li>Messages</li>
          <li>Marketing</li>
          <li>Marketplaces</li>
        </ul>

        <MenuItems showMenu={showMenu} active={active}/>

      </Navbar>

    </>
  )
}

export default Header;
