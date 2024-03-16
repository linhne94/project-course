import React, { useState } from "react";
import arrow from "../../../assets/images/Teacher/left-arrow-in-circle-outline.png";
import { FaPencilAlt } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import EditProfile from "./EditProfile";
import CourseAttended from "./CourseAttended";
import ChangePassword from "./ChangePassword";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import avatar from "../../../assets/images/Avatar/CGakpo2023.jpg"

const SideBarProfile = () => {
  const [open, setOpen] = useState(true);
  const [currentTab, setCurrentTab] = useState(0);
  const [selectedTab, setSelectedTab] = useState(0);
  const Menus = [
    { title: "Edit Profile", icon: <FaPencilAlt /> },
    { title: "Course Attended", icon: <MdMenuBook /> },
    { title: "Change Password", icon: <FaUserEdit /> },
  ];
  const handleTabClick = (index) => {
    setCurrentTab(index);
    setSelectedTab(index);
  };
  return (
    <div>
      <Header/>
      <div className="flex items-center justify-center h-screen pt-5">
        <div
          className= "bg-[#04ddb2] w-[17.1%] p-5 ml-20 pt-8 h-5/6 max-h-screen relative duration-300 rounded-xl"
        >
    
          <div className="gap-x-4 items-center">
          <img src={avatar} alt="Profile" className="w-auto h-auto rounded-full p-2" />
            <h1
              className={`text-black origin-left font-medium text-3xl duration-200
              }`}
            >
              Welcome, User
            </h1>
          </div>
          
          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-green-200 text-black text-sm items-center gap-x-4 
                  ${Menu.gap ? "mt-9" : "mt-2"} ${
                  index === selectedTab && "bg-black text-white hover:bg-black hover:text-white"
                } `}
                 onClick={() => handleTabClick(index)}
              >
               
                <a
                  href={Menu.src}
                  className={`${
                    !open && "hidden"
                  } origin-left duration-200 flex `}
                >
                  <span className="px-3 text-xl">{Menu.icon}</span>
                  {Menu.title}
                </a>
                <a
                  href={Menu.src}
                  className={`${open && "hidden"} origin-left duration-200`}
                >
                  <span className="text-2xl">{Menu.icon}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className=" flex-1 p-7 mx-7 my-4 h-full">
        {currentTab === 0 && (
          <div className="my-8">
            <EditProfile/>
          </div>
        )}
        {currentTab === 1 && (
          <div className="my-8">
           <CourseAttended/>
          </div>
        )}
        {currentTab === 2 && (
          <div className="my-8">
            <ChangePassword/>
          </div>
        )}
      </div>
      </div>
      <div className="mt-32">
        <Footer/>
      </div>
      
    </div>
  );
};

export default SideBarProfile;
