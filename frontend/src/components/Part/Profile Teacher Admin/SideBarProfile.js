import React, { useState } from "react";
import arrow from "../../../assets/images/Teacher/left-arrow-in-circle-outline.png";
import { FaPencilAlt } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import EditProfile from "./EditProfile";

import ChangePassword from "./ChangePassword";

import avatar from "../../../assets/images/Avatar/CGakpo2023.jpg";

const SideBarTeacherProfile = () => {
  const [open, setOpen] = useState(true);
  const [currentTab, setCurrentTab] = useState(0);
  const [selectedTab, setSelectedTab] = useState(0);
  const Menus = [
    { title: "Edit Profile", icon: <FaPencilAlt /> },
    { title: "Change Password", icon: <FaUserEdit /> },
  ];
  const handleTabClick = (index) => {
    setCurrentTab(index);
    setSelectedTab(index);
  };

  const [file, setFile] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  // Function to handle file input change
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFile(e.target.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div>

      <div className="flex items-center justify-center h-screen pt-8">
        <div className="bg-primary w-[17.1%] p-5 ml-20 pt-8 h-5/6 max-h-screen relative duration-300 rounded-xl">
          <div className="gap-x-4 items-center">
            <div>
              <div
                className="relative inline-block"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Display the image */}
                {file ? (
                  <img
                    src={file}
                    alt="Selected"
                    className="w-auto h-auto rounded-full p-2"
                  />
                ) : (
                  <img
                    src={avatar}
                    alt="Profile"
                    className={`w-auto h-auto rounded-full p-2 ${isHovered ? "opacity-50" : "opacity-100"
                      }`}
                  />
                )}

                {/* Show this button when hovered */}
                {isHovered && (
                  <label
                    htmlFor="fileInput"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  >
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer">
                      Upload Image
                    </span>
                    <input
                      id="fileInput"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="opacity-0 cursor-pointer"
                    />
                  </label>
                )}
              </div>
            </div>
            <h1
              className={`text-black origin-left font-medium text-2xl duration-200 pt-2 text-center
              }`}
            >
              Welcome, Teacher
            </h1>
            <p className="underline underline-offset-2 text-xl pl-3 py-2">
              <a href="#">Log out</a>
            </p>
          </div>

          <ul className="pt-1">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-slate-800 hover:text-white text-black text-sm items-center gap-x-4 
                  ${Menu.gap ? "mt-9" : "mt-2"} ${index === selectedTab &&
                  "bg-black text-white hover:bg-black hover:text-white"
                  } `}
                onClick={() => handleTabClick(index)}
              >
                <a
                  href={Menu.src}
                  className={`${!open && "hidden"
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
              <EditProfile />
            </div>
          )}

          {currentTab === 1 && (
            <div className="my-8">
              <ChangePassword />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBarTeacherProfile;
