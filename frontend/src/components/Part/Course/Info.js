import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { dataCourse } from "../../../data/dataCourse";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import Header from "../../Header/Header";
import Accordion from "../Admin/Accordion";
import TeacherInfo from "./TeacherInfo";
import InfoHeader from "./InfoHeader";
const Info = () => {
  const [rating, setRating] = useState(0);
  const [display, setDisplay] = useState(false);

  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <FaStar
        key={i}
        className={`h-6 w-6 ${
          i < rating ? "text-yellow-500" : "text-gray-300"
        }`}
        onClick={() => setRating(i + 1)} 
      />
    );
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setDisplay(true);
      } else {
        setDisplay(false);;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const { id } = useParams();
  const course = dataCourse.course.find((course) => course.id === parseInt(id));

  if (!course) {
    return <div>Course unavailable.</div>;
  }
  return (
    <div className="bg-white">
      <div className={`${display ? 'flex' : 'hidden'}`}>
         <InfoHeader/>
      </div>
     
      <div className="relative mx-auto p-6 bg-cyan-950 text-white flex rounded-md shadow-md">
        <div>
          <h1 className="font-bold text-green-500">
            Category: {course.category}
          </h1>
          <h1 className="text-3xl font-bold my-8">{course.name}</h1>
          <p className="text-white mb-4">{course.description}</p>
          <h2>Created By : Teacher</h2>
          <div className="flex items-center space-x-1">{stars}</div>
          <h1 className="font-bold text-2xl">
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
        <div className="w-1/4 h-auto sm:max-h-auto absolute right-6 p-2 my-8 border-solid border-2 border-green bg-white shadow-2xl sm:fixed text-black">
          <img src={course.image.type} className="w-full" alt=""></img>
          <h1 className="font-bold text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-4xl my-6 mx-2 px-3">
            {course.price}đ
          </h1>
  
            <p className="font-bold px-6">
              This course contains:
            </p>
          <p className="font-normal px-6">{course.chapters.length} chapters</p>
          <p className="font-normal px-6">Beginner Level</p>
          <p className="font-normal px-6">Flexible Schedule</p>
          <p className="font-normal px-6">Earn Degree Credit</p>
          <div className="my-5 flex items-center justify-around">
            <button
              className="rounded bg-white border border-black w-1/3 h-14 relative transition duration-300
            mx-4
            "
            >
              <div
                className="bg-green-500 absolute w-full h-full right-1 bottom-2 rounded pt-3
              transition delay-150 duration-300 ease-in-out hover:translate-y-2 hover:translate-x-1 opacity-90 hover:scale-100 "
              >
                Add To Cart
              </div>
            </button>
            <button
              className="rounded bg-white border border-black w-1/3 h-14 relative transition duration-300
            mx-4
            "
            >
              <div
                className="bg-black text-white absolute w-full h-full right-1 bottom-2 rounded pt-3
              transition delay-150 duration-300 ease-in-out hover:translate-y-2 hover:translate-x-1 opacity-90 hover:scale-100 "
              >
                Buy Now
              </div>
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-semibold mb-2 my-5 mx-8">Video Lectures</h2>
        <div className="w-2/3 my-3 mx-8 p-6">
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

      <TeacherInfo />
      
      
    </div>
  );
};

export default Info;
