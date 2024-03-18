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

const Profile = () => {
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
  return <div className="w-full mx-auto bg-white">
    <Header />
    <div className="flex w-full justify-center items-start flex-row pt-20 gap-x-10">
      <div className="h-[550px] mt-8">
        <div className="bg-[#04ddb2] h-full py-10 px-10 relative duration-300 rounded-xl">
          <div className="flex flex-col items-center">
            <img src={avatar} alt="Profile" className="w-40 h-40 rounded-full p-2" />
            <h1 className={`text-black origin-left font-medium text-3xl duration-200}`}>
              Welcome, User
            </h1>
          </div>

          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex rounded-md p-2 cursor-pointer text-black text-sm items-center 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === selectedTab && "bg-black text-white hover:bg-black hover:text-white"
                  } `}
                onClick={() => handleTabClick(index)}
              >
                <a
                  href={Menu.src}
                  className={`${!open && "hidden"} origin-left duration-200 flex `}
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
      </div>
      <div className=" max-w-[50%] w-full h-[700px]">
        <div className="content">
          {currentTab === 0 && (
            <div className="my-8">
              <EditProfile />
            </div>
          )}
          {currentTab === 1 && (
            <div className="my-8">
              <CourseAttended />
            </div>
          )}
          {currentTab === 2 && (
            <div className="my-8">
              <ChangePassword />
            </div>
          )}
        </div>
      </div>
    </div>
    <Footer />
  </div>;
};

export default Profile;
