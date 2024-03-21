import React from "react";
import ImgLogin from '../../../../assets/images/logo_noBg.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronLeft, faCircleQuestion, faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import { courseHtml } from "../../../../data/learningData";


function HeaderLearning({ course }) {

    const { name, lessonsCompleted, lessons } = courseHtml;



    return <div className="h-[56px] flex justify-between w-full mx-auto ">
        <div className="flex h-full items-center text-white">
            <Link to="/previous" className="flex items-center justify-center h-full  w-[58px] hover:bg-[#002849] " >  <FontAwesomeIcon icon={faChevronLeft} /></Link >
            <Link className="w-20 max-w-[50px] ml-2 mr-5" to='/' ><img src={ImgLogin} className="w-full" alt="" /></Link>
            <span>{course.title}</span>
        </div>
        <div className="flex h-full items-center text-white gap-x-5 px-10">
            <div className="flex items-center gap-x-3">
                <div className="border border-gray-200 rounded-full h-10 w-10 flex justify-center items-center">
                    <span className="text-xs">  10</span>
                </div>
                <span>lesson</span>
            </div>
            <div >
                <button className="opacity-60 hover:opacity-100 space-x-2" >
                    <FontAwesomeIcon icon={faNoteSticky} />
                    <span>Note</span>
                </button>
            </div>
            <div >
                <button className="opacity-60 hover:opacity-100 space-x-2" >
                    <FontAwesomeIcon icon={faCircleQuestion} />
                    <span>Guidance</span>
                </button>
            </div>
        </div>
    </div >;
}

export default HeaderLearning;
