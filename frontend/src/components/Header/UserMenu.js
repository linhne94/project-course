import React, { useContext } from "react";
import Avatar from '../../assets/images/6298053d43cd1.jpg';

import MenuItem from './MenuItem';
import { menuUserItems } from "../../data/data";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from 'react-router-dom'

function UserMenu() {
    const { user, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        // Kiểm tra nếu phần tử có id là "root" tồn tại trước khi truy cập classList
        const rootElement = document.getElementById('root');
        if (rootElement) {
            rootElement.classList.add('logout-animation');
            setTimeout(() => {
                navigate('/');
            }, 500); // Đợi cho animation hoàn thành trước khi điều hướng
        } else {
            navigate('/');
        }
    };

    return <div className="absolute border border-gray-200 bg-gray-50 top-12 right-1 px-9 py-4 rounded-lg shadow-lg transition">
        <div className="flex flex-row items-center pb-4 gap-4 ">
            <img className="w-11 h-11 rounded-full" src={Avatar} alt="" />
            <h1>{user.username}</h1>
        </div>
        <hr className="mb-2" />
        <div className="text-gray-600">
            <ul className="text-sm">
                <li className="hover:text-black mb-2">
                    <a href="/" className="block py-2">Profile</a>
                </li>
            </ul>
            <hr className="my-2" />

            <ul className="text-sm">
                <li className="hover:text-black mb-4">
                    <a href="/" className="block py-2">Write Blog</a>
                </li>
                <li className="hover:text-black mb-2">
                    <a href="/" className="block ">My Blog</a>
                </li>
            </ul>
            <hr className="my-2" />
            <ul className="text-sm">
                <li className="hover:text-black mb-2">
                    <a href="/" className="block py-2">Saved Blogs</a>
                </li>
            </ul>
            <hr className="my-2" />
            <ul className="text-sm">
                <li className="hover:text-black mb-2">
                    <a href="/" className="block py-2" onClick={logout}>Log Out</a>
                </li>
            </ul>
        </div>
    </div>;
}

export default UserMenu;
