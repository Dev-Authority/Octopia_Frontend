import { React, useState } from 'react';
import { Link } from "react-router-dom";
import "./style.css";
import { Navbar} from 'reactstrap';
import MenuOutlined from '@mui/icons-material/Menu';

import MenuItems from './MenuItems';


const Header = () => {

  const [active, setActive] = useState(false)

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
          <li>Products</li>
          <li>Commandes</li>
          <li>Finance</li>
          <li>Rapports</li>
          <li>Seller Performance</li>
          <li>Messages</li>
          <li>Marketing</li>
          <Link to={"/marketplace"}>
            <li>Marketplaces</li>
          </Link>
        </ul>

        <MenuItems showMenu={showMenu} active={active} className="premier_plan"/>

      </Navbar>

    </>
  )
}

export default Header;
