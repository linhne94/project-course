import React, { useState, useEffect } from "react";
import ImgLogin from '../../../../assets/images/logo_noBg.png'
import Avatar from '../../../../assets/images/6298053d43cd1.jpg';

import { Link } from 'react-router-dom';

import { CgMenuRight, CgClose } from 'react-icons/cg'

function TeacherHeader() {
    const [bg, setBg] = useState(false)
    const [mobileNav, setMobileNav] = useState(false)
    const [btnColor, setBtnColor] = useState(false)
    const [loginSuccess, setLogginSuccess] = useState(false)



    return <header className=" w-full py-3 transition-all duration-200 border-b border-gray-200">
        <div className="container mx-auto">
            <div className="flex justify-between items-center relative">
                <div className="flex items-center flex-col  flex-1">
                    <Link className="flex items-center w-full flex-row" to='/teacherpage'>
                        <img src={ImgLogin} className="w-12 mr-2" alt="" />
                        <span className="font-semibold text-[#00457c] text-xl font-logoTitle">Brainity</span>
                    </Link>
                </div>
                <div className="flex-grow flex justify-center items-center">
                    <h1 className="text-3xl font-semibold text-primary   font-logoTitle -">Teacher Page</h1>
                </div>
                <div className=" flex-1 cursor-pointer">
                    <Link to='/profileTeacher'>  <img className="w-8 h-18 rounded-full ml-auto" src={Avatar} alt="" /></Link>
                </div>
            </div>

        </div>
    </header>;
}

export default TeacherHeader;
