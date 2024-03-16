import React from "react";
import { useParams } from "react-router-dom";
import { dataCourse } from "../../../data/dataCourse";
import { FaStar } from "react-icons/fa";
const InfoHeader = () => {
  const { id } = useParams();
  const course = dataCourse.course.find((course) => course.id === parseInt(id));

  return (
    <header className="bg-cyan-950 py-1 h-[60px] fixed left-0 w-full transition-all duration-200">
      <div className="mx-5">
        <h1 className="text-md font-semibold text-white">{course.name}</h1>
        <div className="flex items-center pb-2">
          <p className="text-yellow-500  text-lg">4.8</p>
          <FaStar className="text-yellow-500" />
        </div>
      </div>
    </header>
  );
};

export default InfoHeader;
