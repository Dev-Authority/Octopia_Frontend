import React from 'react';
import Close from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";


const MenuItems = ({ showMenu, active }) => {

    const { t } = useTranslation(["Navbar"]);

    return (
        <ul className={active ? 'flex-col flex items-center fixed inset-0 left-1/3 uppercase backdrop-blur-lg gap-8 justify-center p-8 md:hidden text-black zIndex' : 'hidden'}>
            <Close onClick={showMenu} className='cursor-pointer' />
            <li className='text-center'>{t("Products")}</li>
            <li className='text-center'>{t("Commandes")}</li>
            <li className='text-center'>{t("Finance")}</li>
            <li className='text-center'>{t("Rapports")}</li>
            <li className='text-center'>{t("SellerPerformance")}</li>
            <li className='text-center'>{t("Messages")}</li>
            <li className='text-center'>{t("Marketing")}</li>
            <Link to={"/marketplace"}>
                <li className='text-center'>{t("Marketplaces")}</li>
            </Link>
        </ul>
    );
};

export default MenuItems;