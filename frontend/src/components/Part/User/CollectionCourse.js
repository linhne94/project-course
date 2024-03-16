import React from "react";
import { collectionCourse } from "../../../data/data";
import './style.css'
import CollectionSlide from "./CollectionSlide";
function CollectionCourse() {
  const { title, subtitle, buttonText } = collectionCourse
  return <section className="section">
    <div className="container flex mx-auto flex-col justify-start items-start gap-y-6 lg:flex-row lg:justify-center lg:items-center ">
      <div className="container max-w-full flex flex-col  justify-start md:mr-12">
        <div className="flex flex-col justify-start gap-x-8" >
          <h1 className="title">{title}</h1>
          <p className="text-sm pb-3">{subtitle}</p>
        </div>
        <div>
          <button className="bg-[#04ddb2] hover:bg-[#03ecbe] lg:min-w-[320px] px-8 py-[12px] my-3 hover:transform-[scale3d(1.05,1.05,1.05)] text-base font-semibold text-white rounded-[32px] transition transform hover:scale-105 capitalize">
            {buttonText}
          </button>
        </div>
      </div>

      <div className="mx-auto lg:max-w-[60%] max-w-[96%]">
        <CollectionSlide />
      </div>
    </div>

  </section>;
}

export default CollectionCourse;
