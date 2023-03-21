import React from 'react';
import { useLocation } from "react-router-dom";
import Header from '../../Layout/Header';

const EnrollMarket = () => {
  
  const location = useLocation();
  const {Name, Slogan, Logo, Link, Description, Features} = location.state;
  console.log(Name)
  return (
    <>
      <Header />
      <div>{Name}</div>
    </>

  )
}
export default EnrollMarket;