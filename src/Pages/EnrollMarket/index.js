import React from 'react';
import { useLocation } from "react-router-dom";
import WizardForm from '../../Components/WizardForm';
import Header from '../../Layout/Header';

const EnrollMarket = () => {

  const location = useLocation();
  const { Name, Slogan, Logo, Link, Description, Features } = location.state;
  console.log(Name)
  return (
    <>
      <Header />
      <WizardForm />
      
    </>

  )
}
export default EnrollMarket;