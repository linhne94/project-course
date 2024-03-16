import React, { useState, useEffect } from "react";
import Logo from '../../assets/svgexport-1.svg'
import { navigation } from '../../data/data'
import { CgMenuRight, CgClose } from 'react-icons/cg'
import HeaderMobile from './HeaderMobile';
import './header.css'
function Header() {
    const [bg, setBg] = useState(false)
    const [mobileNav, setMobileNav] = useState(false)
    const [btnColor, setBtnColor] = useState(false)


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setBg(true);
                setBtnColor(true);
            } else {
                setBg(false);
                setBtnColor(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <header className={`${bg ? 'bg-[white] py-4 lg:py-3' : 'bg-none'}  fixed left-0 w-full py-3 z-10 transition-all duration-200`}>
        <div className="container mx-auto">
            <div className="flex justify-between items-center">
                <a href="/">
                    <img onClick={() => setMobileNav(!mobileNav)} className="h-6 lg:h-8" src={Logo} alt="" />
                </a>
                {/* menu icon*/}
                <div onClick={() => setMobileNav(!mobileNav)} className='text-2xl bg-gray-500 w-8 h-8 m-1 flex justify-center items-center text-white rounded-full md:hidden lg:text-3xl cursor-pointer'>
                    {mobileNav ? <CgClose /> : <CgMenuRight />}
                </div>
                <nav className="hidden md:flex">
                    <ul className='flex md:gap-x-12'>
                        {navigation.map((item, index) => {
                            return <li key={index}>
                                <a className='capitalize text-lg hover:border-b hover:border-[#000]
                                transition-all' href={item.href}>{item.name}</a>
                            </li>
                        })}
                    </ul>
                </nav>
                <button className={`${btnColor ? 'bg-[#04ddb2] hover:bg-[#03ecbe] text-white ' : 'bg-[#eef0f2] hover:bg-grey-1 text-second'}  px-[40px] py-[9px] my-1 hover:transform-[scale3d(1.05,1.05,1.05)] text-sm font-semibold  rounded-full  backdrop-blur-md transition  transform hover:scale-105 hidden md:flex`}>Login</button>
                <div className={`${mobileNav ? ' top-[64px]' : 'bottom-full'} md:hidden h-[550px] fixed left-0 w-full max-w-full backdrop-blur-lg bg-white/60 transition-all shadow-lg border-t-[1px] custom-nav-mobile `}>
                    <HeaderMobile />
                </div>
            </div>
        </div>
    </header>;
}

export default Header;
