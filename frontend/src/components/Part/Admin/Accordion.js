import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item bg-white border border-gray-300 divide-x-0 divide-y-2 border-solid w-full p-6">
      <div
        className="accordion-title flex cursor-pointer"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="font-bold text-2xl">{title}</div>
        <div className="text-2xl ml-auto ">{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <ul className="flex-col">
          {content.map((video, index) => (
            <li key={index}>{video}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Accordion;