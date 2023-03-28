import React from 'react';
import UpperNav from './UpperNav';
import LowerNav from './LowerNav';
import "./style.css";


const Header = () => {

  return (
    <>

      <UpperNav className="deuxieme_plan"/>
      <LowerNav className="premier_plan"/>

    </>
  )
}

export default Header;
