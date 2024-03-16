import React from "react";
import { product } from "../../../data/data";
function CourseNor() {
    const { titleNor, courseNor, subtitleNor } = product
    return <div className="flex flex-col ">
        <div className="text-center uppercase my-7">
            <h1 className=" title text-primary">
                {titleNor}
            </h1>
            <p className="font-medium text-[14px] lg:text-base ">{subtitleNor}</p>
        </div>

        <div className="container  mt-4">
            <div className="grid justify-items-center grid-cols-1 gap-y-10 sm:grid-cols-2  lg:grid-cols-3 ">
                {courseNor.map((item, index) => {
                    return <div key={index} className="flex flex-col shadow-md rounded-lg w-[90%] course-item hover:shadow-lg ">
                        <div className="rounded-t-lg ">
                            <img class="object-cover rounded-t-lg w-full h-auto" src={item.image.type} alt="" />
                        </div>
                        <div className="m-5 ">
                            <h1 className="text-primary text-lg font-semibold">{item.title}</h1>
                            <p className="text-gray-500 text-[14px]  min-h-[50px]">{item.subtitle}</p>
                            <div className="mt-2">
                                <div className="text-[#f05f4d]">FREE</div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>;
}

export default CourseNor;
