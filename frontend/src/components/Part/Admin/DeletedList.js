/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import { Link } from "react-router-dom";
import { dataCourse } from "../../../data/dataCourse";
import { FaCheckCircle } from "react-icons/fa";
const DeletedList = () => {
  const { course } = dataCourse;
  const deletedCourses = course.filter((item) => item.isDelete);
  return (
    <div className="j">
      <ul role="list" className="divide-y divide-gray-100">
        {deletedCourses.map((item, index) => {
          const { id, name, image, description } = item;
          return (
            <li key={id} className="flex justify-between gap-x-6 py-5">
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src={image.type ? image.type : ""}
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <del className="text-sm font-semibold leading-6 text-gray-900">
                  {name}
                </del>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DeletedList;
