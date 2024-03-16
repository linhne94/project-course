import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../../../../src/slider.css'
// import required modules
import { Navigation, Pagination } from 'swiper'
// import data
import { collectionCourse } from "../../../data/data";
//import icons
import { HiPlus } from "react-icons/hi";

function CollectionSlide() {

    const { collection } = collectionCourse

    return (

        <Swiper navigation={true} modules={[Navigation]} className="productSlider h-[420px] md:h-[500px] mx-auto shadow-md rounded-md ">

            {collection.map((item, index) => {
                return <SwiperSlide key={index}>
                    <div className="flex flex-col justify-center items-center gap-y-5 p-4">
                        <div className="relative w-full h-[300px] overflow-hidden">
                            <img className="absolute top-0 left-0 w-full h-full object-cover" src={item.image.type} alt="" />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="text-primary font-medium text-lg lg:text-2xl">{item.name}</h1>
                            <p className="text-md lg:text-lg">{item.quality} courses</p>
                        </div>
                    </div>
                </SwiperSlide>
            })}

        </Swiper >



    );

}

export default CollectionSlide;
