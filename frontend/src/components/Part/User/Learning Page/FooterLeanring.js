import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";


function FooterLeanring() {
    return <div className="h-[56px] flex justify-center items-center w-full mx-auto" >
        <div className="flex gap-x-9">
            <button className="flex justify-center items-center gap-x-3"><FontAwesomeIcon icon={faChevronLeft} /> Previous lesson</button>
            <button className="flex justify-center items-center gap-x-3 border border-primary px-3 py-1 rounded-lg text-white bg-primary">Next lesson <FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
        <div className="flex flex-row items-center absolute right-0 gap-x-5 mx-3">
            <h1 className="font-medium">2. Làm quen với HTML</h1>
            <button className="w-3 h-3 p-5 flex justify-center items-center rounded-full bg-white"><FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
    </div>;
}

export default FooterLeanring;
