import React from "react";
import { dataCourse } from "../../../data/dataCourse"; // Import dữ liệu khóa học
import { HiCurrencyDollar } from "react-icons/hi"; // Import icon giá
import { Link } from "react-router-dom";
import { CiPlay1 } from "react-icons/ci";
const FreeCollection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {dataCourse.course.map((course) => (
        <div key={course.id} className="rounded-lg relative">
          <Link
            to={`/collection/${course.id}`}
            className="block relative group transition ease-in-out duration-300"
          >
            <img
              src={course.image.type}
              alt={course.name}
              className="w-full h-40 object-cover mb-4 rounded-lg transition-opacity duration-300 group-hover:opacity-50"
            />
            <button className="absolute inset-0 flex items-center justify-center transform top-1/3 left-[70px] w-1/2 h-[40px] bg-black rounded-full text-white font-bold py-2 px-4 opacity-0 group-hover:opacity-100
             transition-all duration-300">
              View Course
            </button>
          </Link>
          <div className="py-1">
            <h2 className="text-xl font-semibold text-[#04ddb2]">{course.name}</h2>
            <div className="">
              <div className="flex items-center">
                <HiCurrencyDollar className="text-gray-500 mr-2" />
                <span className="font-semibold">
                  {course.price}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FreeCollection;
