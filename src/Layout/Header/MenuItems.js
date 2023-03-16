import Close from '@mui/icons-material/Close';
import React from 'react';

const MenuItems = ({ showMenu, active }) => {
    return (
        <ul className={active ? 'flex-col flex items-center fixed inset-0 left-1/3 uppercase backdrop-blur-lg gap-8 justify-center p-8 md:hidden text-black' : 'hidden'}>
            <Close onClick={showMenu} className='cursor-pointer' />
            <li>Products</li>
            <li>Commandes</li>
            <li>Finance</li>
            <li>Rapports</li>
            <li>Seller Performance</li>
            <li>Messages</li>
            <li>Marketing</li>
            <li>Marketplaces</li>
        </ul>
    );
};

export default MenuItems;