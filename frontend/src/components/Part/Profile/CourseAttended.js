import React from "react";
import FullStackImg from "../../../assets/images/Product/full-stack.jpg";

import JsImg from "../../../assets/images/Product/js.jpg";
import NodeImg from "../../../assets/images/Product/node.jpg";
import PythonImg from "../../../assets/images/Product/python.jpg";
import ReactImg from "../../../assets/images/Product/react.jpg";
import SafeTyImg from "../../../assets/images/Product/safety.jpg";
import SassImg from "../../../assets/images/Product/sass.jpg";
import UbuntuImg from "../../../assets/images/Product/ubuntu.png";
import { CiPlay1 } from "react-icons/ci";

const inProgress = [
  { name: "Full Stack Course", src: FullStackImg, progress: "20%" },
  { name: "NodeJS and Server-side", src: NodeImg, progress: "50%" },
  { name: "Frontend with ReactJS", src: ReactImg, progress: "75%"},
];

const isFinished = [
  { name: "Javascript Course", src: JsImg, progress: "100%" },
  { name: "Safety in Technology", src: SafeTyImg, progress: "100%" }
];
const CourseAttended = () => {
  return (
    <div className="w-full max-w-4xl">
      <h1 className="text-2xl font-semibold px-3">In Progress</h1>
      <div className="flex">
        {inProgress.map((course, index) => (
          <div className="flex items-center justify-between p-4 border-b">
            <div className=" items-center">
              <div className="relative flex items-center group">
                <img
                  src={course.src}
                  alt=""
                  className="w-full h-full rounded-md mr-4 group-hover:opacity-50 transition ease-in-out "
                />
                <button
                  className=" absolute inset-0 flex items-center justify-center transform top-1/3 left-[100px] w-1/6 h-[40px]
       bg-black rounded-full text-white font-bold py-2 px-4 invisible group-hover:visible transition duration-300"
                >
                  <CiPlay1 />
                </button>
              </div>
              <div>
                <h2 className="py-2 font-semibold">{course.name}</h2>
                <h4 className="h-2 font-light text-sm">In progress {course.progress}</h4>
                <div className="w-60 h-2 bg-gray-300 rounded-full">
                  <div
                    className="h-full bg-blue-500 rounded-full my-6"
                    style={{ width: course.progress }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h1 className="text-2xl font-semibold px-3 pt-10">Course Finished</h1>
      <div className="flex">
        {isFinished.map((course, index) => (
          <div className="flex items-center justify-between p-4 border-b">
            <div className=" items-center">
              <div className="relative flex items-center group">
                <img
                  src={course.src}
                  alt=""
                  className="w-full h-full rounded-md mr-4 group-hover:opacity-50 transition ease-in-out "
                />
                <button
                  className=" absolute inset-0 flex items-center justify-center transform top-1/3 left-[100px] w-1/6 h-[40px]
       bg-black rounded-full text-white font-bold py-2 px-4 invisible group-hover:visible transition duration-300"
                >
                  <CiPlay1 />
                </button>
              </div>
              <div>
                <h2 className="py-2 font-semibold">{course.name}</h2>
                <h4 className="h-2 font-light">Finished 100%</h4>
                <div className="w-60 h-2 bg-gray-300 rounded-full mt-2">
                  <div
                    className="h-full bg-blue-500 rounded-full my-6"
                    style={{ width: course.progress }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseAttended;
