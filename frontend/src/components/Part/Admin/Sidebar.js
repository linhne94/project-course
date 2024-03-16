import { React, useState } from "react";

import arrow from "../../../assets/images/Teacher/left-arrow-in-circle-outline.png";

import List from "./List";
import Tabs from "./Tabs";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Course Confirmation", src: "courseConfirm" },
    { title: "Teacher Management", src: "manageTeacher" },
  ];
  return (
    <div>
      <div className="flex">
        <div
          className={`${
            open ? "w-72" : "w-20 "
          } bg-green-300 h-screen p-5  pt-8 relative duration-300`}
        >
          <img
            src={arrow}
            alt=""
            className={`absolute cursor-pointer right-3 top-9 w-7
                  rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <img
              src="./src/assets/logo.png"
              alt=""
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`text-black origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              Brainity
            </h1>
          </div>
          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-sm items-center gap-x-4 
                    ${Menu.gap ? "mt-9" : "mt-2"} ${
                  index === 0 && "bg-light-white"
                } `}
              >
                <a
                  href={Menu.src}
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
