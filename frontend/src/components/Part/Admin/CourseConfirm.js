import React from "react";
import Tabs from "./Tabs";
import Sidebar from "./Sidebar";
const CourseConfirm = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="h-screen flex-1 p-7">
        <div>
          <h1 className="text-2xl font-semibold ">Admin Page</h1>
          <Tabs />
        </div>
      </div>
    </div>
  );
};

export default CourseConfirm;
