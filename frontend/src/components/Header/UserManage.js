import React, { useState } from "react";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from '../../assets/images/6298053d43cd1.jpg';
import UserMenu from "./UserMenu";
function UserManage() {
  const [showUserItem, setShowUserItem] = useState(false)


  return <div className="min-w-[115px] justify-center items-center gap-x-8 hidden md:flex">
    <div className="cursor-pointer flex items-center">
      <FontAwesomeIcon className="text-xl" icon={faBell} />
    </div>
    <div className="cursor-pointer" onClick={() => setShowUserItem(!showUserItem)}>
      <img className="w-8 h-8 rounded-full" src={Avatar} alt="" />
    </div>
    {showUserItem && <UserMenu />}
  </div>;
}

export default UserManage;
