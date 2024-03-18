import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { dataCourse } from "../../../../data/dataCourse";
import Accordion from "./Accordion";
import TeacherHeader from "./TeacherHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

const Preview = () => {
  const { id } = useParams();
  const course = dataCourse.course.find((course) => course.id === parseInt(id));
  const [showVideo, setShowVideo] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");

  if (!course) {
    return <div>Course unavailable.</div>;
  }
  return (
    <div className="bg-white">
      <TeacherHeader />
      <div className="relative mx-auto p-6 bg-white flex ">
        <div>
          <Link to='/teacherpage' className="space-x-3 flex items-center"> <FontAwesomeIcon icon={faArrowLeftLong} /> <h1 className="space-x-3"> Back to teacher page</h1></Link>
          <h1 className="text-3xl font-bold my-8">{course.name}</h1>
          <p className=" mb-4">{course.description}</p>
          <h2>Created By : Teacher</h2>
          <h1 className="font-bold text-2xl my-4">
            What will you learn from this course:
          </h1>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
            {course.objective.map((obj, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2">&#10004;</span>
                {obj}
              </li>
            ))}
          </ul>
        </div>
        <div className="abc w-1/4 h-auto sm:max-h-auto absolute right-6 p-2 my-8 bg-white sm:fixed text-black">
          {showVideo ? (
            <iframe
              src={currentVideoUrl}
              className="w-full rounded-lg"
              title="W3Schools Free Online Web Tutorials"
            ></iframe>
          ) : (
            <img src={course.image.type} className="w-full rounded-lg" alt="" />
          )}
          <h1 className="font-bold text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-4xl my-6 mx-2 px-3">
            {course.price}đ
          </h1>

          <p className="font-bold px-6">This course contains:</p>
          <p className="font-normal px-6">{course.chapters.length} chapters</p>
          <p className="font-normal px-6">Beginner Level</p>
          <p className="font-normal px-6">Flexible Schedule</p>
          <p className="font-normal px-6">Earn Degree Credit</p>
          <div className="my-5 flex items-center justify-around">
            <button
              className="rounded-full  bg-white border border-black w-full h-14 relative transition duration-300
            mx-4
            "
            >
              <div
                className="bg-[#04ddb2] absolute w-full h-full right-1 bottom-2  pt-3
              transition delay-150 rounded-full duration-300 ease-in-out hover:translate-y-2 hover:translate-x-1 opacity-90 hover:scale-100 "
              >
                Edit
              </div>
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-semibold mb-2 my-5 mx-8">
          Video Lectures
        </h2>
        <div className="w-2/3 my-3 mx-8 p-6">
          {course.chapters && course.chapters.length > 0 ? (
            <ul className="list-disc pl-6">
              {course.chapters.map((items, index) => (
                <Accordion
                  key={index} // Đảm bảo key là duy nhất trong một danh sách
                  title={items.name}
                  content={items.videos} // Truyền danh sách videos của mỗi chapter vào
                  setShowVideo={setShowVideo}
                  setUrl={setCurrentVideoUrl} // Đặt lại tên prop này nếu cần
                />
              ))}
            </ul>
          ) : (
            <p>No videos available for this course.</p>
          )}
        </div>
      </div>


    </div>
  );
};

export default Preview;
