import React, { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";

const Accordion = ({ title, content, setShowVideo, setUrl }) => {
  const [isActive, setIsActive] = useState(false);
  const [url, setCurrentVideoUrl] = useState(""); // State để lưu trữ URL của video hiện tại

  const toggleVideo = (videoUrl) => {
    setShowVideo(true);
    setCurrentVideoUrl(videoUrl);
    setUrl(videoUrl);
    console.log(videoUrl); // Đặt showVideo thành true khi người dùng nhấp vào tiêu đề của accordion
  };

  return (
    <div className="accordion-item w-full mb-4">
      <div
        className="accordion-title bg-gray-200 border border-gray-300 rounded-lg p-4 flex cursor-pointer"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="font-bold text-xl">{title}</div>
        <div className="text-xl ml-auto">{isActive ? "-" : "+"}</div>
      </div>
      <div
        className={`accordion-content ${
          isActive ? "bg-white" : ""
        } overflow-hidden transition-max-height duration-500 ease-in-out ${
          isActive ? "max-h-[700px]" : "max-h-0"
        }`}
      >
        <ul className="flex-col h-full">
          {content.map((video, index) => (
            <li
              key={index}
              className="py-2 flex cursor-pointer justify-between h-full"
            >
              <div className="flex">
                <FaPlayCircle className="mx-2 mt-1 text-[#04ddb2]" />{" "}
                
                {video.name}
              </div>
          
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Accordion;