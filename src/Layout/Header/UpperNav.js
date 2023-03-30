import { React, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./style.css";
import { Navbar, NavbarText } from 'reactstrap';
import ListItemIcon from "@mui/material/ListItemIcon";
import Badge from "@mui/material/Badge";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import "../../Hooks/i18next"
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import { Select } from "antd";

import Octopia from "../../Assets/images/Octopia.png"

const Languages = [["English", "en"], ["Español", "es"], ["Français", "fr"]];

const UpperNav = () => {


  const { t } = useTranslation(["Navbar"]);

  const handleLanguageChange = (value) => {
    i18next.changeLanguage(value);
  }

  useEffect(() => {
    if (localStorage.getItem("i18nextLang")?.length > 2) {
      i18next.changeLanguage("en");
    }
  })


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
            <p>{t("Welcome")}</p>
            <p className='font-semibold'>Mehdi IJIKKI (123)</p>
          </NavbarText>
        </div>
        <div className="header_top_content_right hidden sm:flex">
          <ListItemIcon className='mt-1'>
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
        <Select
          value={localStorage.getItem("i18nextLng")}
          className="mr-2 mb-2 premier_plan fixed bottom-0 right-0 selectStyle"
          dropdownAlign={{ offset: [0, -150] }}
          onChange={(value) => {
            // setSelectedType(value);
            handleLanguageChange(value);
          }}
          options={Languages?.map((type) => {
            return {
              label: `${type[0]}`,
              value: type[1],
            };
          })}
        >
        </Select>

      </Navbar>
    </>
  )
}

export default UpperNav;
