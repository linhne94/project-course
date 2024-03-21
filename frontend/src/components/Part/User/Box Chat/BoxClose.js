
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";



function BoxClose({ handleOpenBox }) {
    return <div className="cursor-pointer w-14 h-14 text-white text-xl bg-primary flex justify-center items-center rounded-full  transition-transform hover:scale-110" onClick={handleOpenBox}>
        <FontAwesomeIcon icon={faMessage} />
    </div>;
}


export default BoxClose;
