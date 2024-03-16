import React from "react";
import Avatar from '../../assets/images/6298053d43cd1.jpg';

import MenuItem from './MenuItem';
import { menuUserItems } from "../../data/data";

function UserMenu() {
    return <div className="absolute border border-gray-200 bg-gray-50 top-12 right-1 px-9 py-4 rounded-lg shadow-lg transition">
        <div className="flex flex-row items-center pb-4 gap-4 ">
            <img className="w-11 h-11 rounded-full" src={Avatar} alt="" />
            <h1>Nguyen Phuoc Minh Hieu</h1>
        </div>
        <hr className="mb-2" />
        <div className="text-gray-600">
            {menuUserItems.map((item, index) => (
                <React.Fragment key={index}>
                    <ul className="text-sm">
                        <MenuItem text={item.text} className="hover:text-black" link={item.link} />
                    </ul>
                    {index < menuUserItems.length - 1 && <hr className="my-2" />}
                </React.Fragment>
            ))}
        </div>
    </div>;
}

export default UserMenu;
