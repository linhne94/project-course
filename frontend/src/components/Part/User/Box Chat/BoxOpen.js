import React from "react";
import ImgLogin from '../../../../assets/images/logo_noBg.png'
import CloseBtn from '../../../../assets/svgicon/icons8-close (1).svg'
import PaperClip from '../../../../assets/svgicon/paper-clip-svgrepo-com.svg'
import SendMess from '../../../../assets/svgicon/send-svgrepo-com.svg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { FaPaperclip, FaUpload } from 'react-icons/fa';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
function BoxOpen({ handleCloseBox }) {
    return <div className="w-[320px] h-[400px] rounded-3xl bg-white shadow-lg">
        <header className="flex flex-row bg-slate-50  px-5 rounded-t-3xl py-5 gap-x-3 border-b border-gray-200">
            <div className="w-44 ">
                <img src={ImgLogin} className="mt-0" alt="" />
            </div>
            <div className="space-y-1">
                <h1 className="text-xl font-bold text-primary">Brainity</h1>
                <p className="text-xs">Hello. What can we do to help you? Please ask me anything you have questions about.</p>
            </div>
            <div >
                <img className="w-10 cursor-pointer" onClick={handleCloseBox} src={CloseBtn} alt="" />
            </div>
        </header>
        <div className="h-[220px] text-center flex items-center justify-center flex-col  border-b border-gray-200">
            <img src={ImgLogin} className="w-32" alt="" />
            <h1 className="text-sm">
                Send a message to start a conversation!
            </h1>
        </div>
        <div className="flex flex-row items-center px-4 h-14 ">
            <img className="w-5 h-5 cursor-pointer" src={PaperClip} alt="" />
            <div>
                <input className="w-[250px] px-3 border-none outline-none text-sm" type="text" placeholder="Ask a question..." />
            </div>

            <img className="w-5 h-5 cursor-pointer" src={SendMess} alt="" />
        </div>
    </div>;
}

export default BoxOpen;
