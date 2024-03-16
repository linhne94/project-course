import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dataCourse } from "../../../data/dataCourse";
import Accordion from "./Accordion";

const CourseInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(dataCourse.course.find((c) => c.id === parseInt(id)));

  if (!course) {
    return <p>Course not found.</p>;
  }

  //hàm xử lý nút confirm
  const handleConfirm = () => {
    // Cập nhật giá trị isConfirmed thành true trong đối tượng course
    const updatedCourse = {
      ...course,
      isConfirmed: true,
    };

    // Cập nhật state course
    setCourse(updatedCourse);

    // Hiển thị thông báo "Confirm successfully"
    alert("Confirm successfully");

    // Chuyển về trang localhost:3000/admin
    navigate("/admin");

    // In ra console để kiểm tra xem course có thay đổi không
    console.log("Updated course:", updatedCourse);
  };

  const handleDelete = () => {
    // Tìm kiếm index của khóa học cần xóa trong mảng gốc
    const courseIndex = dataCourse.course.findIndex((c) => c.id === parseInt(id));

    // Kiểm tra xem khóa học có tồn tại không
    if (courseIndex !== -1) {
      // Thực hiện thay đổi trực tiếp trong mảng gốc
      dataCourse.course[courseIndex].isDelete = true;
      alert("Successfully deleted")
      // Chuyển hướng nếu cần thiết
      navigate("/admin");
    } else {
      console.error("Course not found.");
    }
  };

  return (
    <div>
      <div className="relative mx-auto my-8 p-6 bg-white flex rounded-md shadow-md">
        <div>
          <h1 className="font-bold text-green-500">
            Category: {course.category}
          </h1>
          <h1 className="text-4xl font-bold mb-4">{course.name}</h1>
          <p className="text-gray-700 mb-4">{course.description}</p>
          <h2>Created By : Teacher</h2>
        </div>
        <div className="w-1/4 h-auto sm:max-h-auto absolute right-6 p-2 border-solid border-2 border-green bg-white rounded-md">
          <img src={course.image.type} className="w-full" alt=""></img>
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl my-6 mx-2 px-3">
            {course.price}đ
          </h1>
          {course.chapters && course.chapters.length > 0  ? (
            <p className="font-bold px-6">
              This course contains: {course.chapters.length} chapters
            </p>
          ) : (
            <p>No videos available for this course.</p>
          )}
          <h1 className="font-bold text-2xl px-5">
            What will you learn from this course:
          </h1>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2 px-6">
            {course.objective.map((obj, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2">&#10004;</span>
                {obj}
              </li>
            ))}
          </ul>
          <div className="flex justify-between mt-4 px-6">
            <button onClick={handleConfirm} className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300">
              Confirm
            </button>
            <button onClick={handleDelete} className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300">
              Delete
            </button>
          </div>
        </div>
      </div>
      <h2 className="text-4xl font-semibold mb-2 mx-8">Video Lectures</h2>
      <div className="w-2/3 my-8 mx-8 p-6">
        {course.chapters && course.chapters.length > 0 ? (
          <ul className="list-disc pl-6">
            {course.chapters.map((items, index) => (
              <Accordion title={items.name} content={items.videos} />
            ))}
          </ul>
        ) : (
          <p>No videos available for this course.</p>
        )}
      </div>
 
    </div>
  );
};

export default CourseInfo;
