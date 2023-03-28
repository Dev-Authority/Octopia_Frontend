import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import "../../Hooks/i18next"
import Octopia from '../../Assets/images/OctopiaBlue.png';
import { Select } from "antd";



const Languages = [["English","en"], ["Español","es"],["Français","fr"]];

const LoginLeft = () => {

  const [passwordShown, setPasswordShown] = useState(false);
  // const [selectedType, setSelectedType] = useState(Languages[0]);

  const {t} = useTranslation(["Login"])

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  }

  const handleLanguageChange = (value) => {
    i18next.changeLanguage(value);
  }

  useEffect(()=>{
    if (localStorage.getItem("i18nextLang")?.length > 2){
      i18next.changeLanguage("en");
    }
  })

  // console.log(selectedType)
  return (
    <div className='py-20 w-full md:w-1/2 h-screen bg-white rounded-[32px] zIndex '>
      <div className='px-[40px] sm:px-[80px] md:px-[100px]'>
        <img
          alt="logo"
          src={Octopia}
          style={{
            height: 40,
            width: 140,
          }}
        />
      </div>
      <div className='px-[40px] sm:px-[80px] md:px-[100px] flex  h-full w-full'>
        <div className='m-auto'>
          <h2 className='LogText'>{t("title")}</h2>
          <p className='LogDesc'>{t("description")}</p>
          <div className='inputBox'>
            <input type="text" required="required" />
            <span>{t("email")}</span>
          </div>
          <div className='inputBox'>
            <input type={passwordShown ? "text" : "password"} required="required" />
            <span>{t("password")}</span>
          </div>
          <div className='toggleBox'>
            <input type="checkbox" onClick={togglePassword} />
            <span>{t("showPassword")}</span>
          </div>
          <button className='Login_btn'>{t("login")}</button>
        </div>
      </div>
      <div className='px-20 inset-x-0 bottom-0 m-auto'>
        <Select
          value={localStorage.getItem("i18nextLng")}
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
      </div>
    </div>
  )
}
export default LoginLeft;