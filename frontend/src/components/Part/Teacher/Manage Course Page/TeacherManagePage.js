import React from "react";
import TeacherHeader from "./TeacherHeader";
import TeacherManageCourse from "./TeacherManageCourse";

function TeacherManagePage() {
  return <div className='w-full m-auto h-[100vh] bg-white'>
    <TeacherHeader />
    <TeacherManageCourse />
  </div>
}

export default TeacherManagePage;
