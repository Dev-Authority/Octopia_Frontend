import { React, useState } from 'react';
import { Link } from "react-router-dom";
import "./style.css";
import { useTranslation } from 'react-i18next';
import { Navbar} from 'reactstrap';
import MenuOutlined from '@mui/icons-material/Menu';

import MenuItems from './MenuItems';


const Header = () => {

  const [active, setActive] = useState(false);

  const { t } = useTranslation(["Navbar"]);

  const showMenu = () => {
    setActive(!active)
  }

  return (
    <>

      <Navbar className="header_bottom w-full text-white  justify-between ">

        <div className='absolute right-6 md:hidden scale-120'>
          <MenuOutlined onClick={showMenu} className='scale-150 cursor-pointer' />
        </div>

        <ul className='hidden md:flex gap-9 center_element'>
          <li>{t("Products")}</li>
          <li>{t("Commandes")}</li>
          <li>{t("Finance")}</li>
          <li>{t("Rapports")}</li>
          <li>{t("SellerPerformance")}</li>
          <li>{t("Messages")}</li>
          <li>{t("Marketing")}</li>
          <Link to={"/marketplace"}>
            <li>{t("Marketplaces")}</li>
          </Link>
        </ul>

        <MenuItems showMenu={showMenu} active={active} className="premier_plan"/>

      </Navbar>

    </>
  )
}

export default Header;
