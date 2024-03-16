import React from "react";
import { navigation } from '../../data/data'
function HeaderMobile() {
  return <div className=' w-full h-full shadow-2xl  flex justify-center items-center flex-col gap-y-20 '>
    <div className="container ml-12">
      <ul className='text-center h-full flex justify-center items-start flex-col gap-y-10'>
        {navigation.map((item, index) => {
          return <li className='capitalize text-[22px] font-medium hover:text-accent' key={index}>
            <a href={item.href}>{item.name}</a>
          </li>
        })}
      </ul>
    </div>
    <div className="container flex justify-center items-center  ">
      <button className="bg-[#04ddb2] hover:bg-[#03ecbe] w-[95%] py-[12px] hover:transform-[scale3d(1.05,1.05,1.05)] text-xl font-semibold text-white rounded-[32px] transition  transform hover:scale-105 capitalize">login</button>
    </div>
  </div>
}

export default HeaderMobile;
