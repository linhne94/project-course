import React from "react";

import { hero } from '../../../data/data';
function Hero() {
    const { title1, title2, subtitle, buttonText, heroImg } = hero
    return <section className=" lg:py-[120px] py-[100px] lg:bg-center flex ">
        <div className="container mx-auto">
            <div className="flex items-center flex-col lg:flex-row lg:gap-x-[60px]">
                <div className="flex-1 mt-8 lg:min-w-[620px] text-center lg:text-left order-1 lg:-order-1">
                    <h1 className="font-secondary font-extrabold text-[36px] lg:text-[56px] lg:leading-tight lg:max-w-[855px] ">{title1}</h1>
                    <h1 className=" font-secondary font-extrabold text-[30px] lg:text-[48px] lg:leading-tight lg:max-w-[855px] text-primary">{title2}</h1>
                    <h2 className="my-[20px] text-lg">{subtitle}</h2>
                    <button className="bg-[#04ddb2] hover:bg-[#03ecbe] px-[36px] py-[18px] mt-[10px] hover:transform-[scale3d(1.05,1.05,1.05)] text-xl font-semibold text-white rounded-[32px]  backdrop-blur-md transition  transform hover:scale-105">{buttonText}</button>
                </div>
                <div className="flex-1 ">
                    <img src={heroImg.type} alt="" />
                </div>
            </div>
        </div>
    </section>;
}

export default Hero;
