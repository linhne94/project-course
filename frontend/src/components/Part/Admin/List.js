/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import { Link } from "react-router-dom";
import { dataCourse } from "../../../data/dataCourse";
import { FaCheckCircle } from "react-icons/fa";
const List = () => {
  const { course } = dataCourse;
  const courseList = course.filter((item) => !item.isDelete && !item.isConfirmed);
  const handle = () =>{
    console.log(course);
  }
  return (
    <div className="j text-center">
      <ul role="list" className="divide-y divide-gray-100">
        {/* Header row with column names */}
        <li className="flex items-center justify-between py-3 text-sm font-semibold text-gray-500">
          <div className="flex-none w-1/5"></div>
          <div className="flex-none w-1/5">Name</div>
          <div className="flex-none w-1/5">Upload By</div>
          <div className="flex-none w-1/5">Categories</div>
          <div className="flex-none w-1/5">Price</div>
        </li>
  
        {/* Data rows */}
        {courseList.map((item, index) => {
          const { id, name, image, description, category, price } = item;
          return (
            <li key={id} className="flex items-center justify-between py-5">
              {/* Image Column */}
              <div className="flex-none w-1/5">
                <img
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src={image.type ? image.type : ""}
                  alt=""
                />
              </div>
  
              {/* Name Column */}
              <div className="flex-none w-1/5">
                <Link onClick={handle} to={`/courses/${id}`} className="min-w-0">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {name}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {description}
                  </p>
                </Link>
              </div>
  
              {/* Upload By Column */}
              <div className="flex-none w-1/5">
                <p className="text-sm leading-6 text-gray-900">Truong Nghia</p>
              </div>
  
              {/* Categories Column */}
              <div className="flex-none w-1/5">
                <p className="text-sm leading-6 text-gray-900">{category}</p>
              </div>
  
              {/* Price Column */}
              <div className="flex-none w-1/5">
                <p className="text-sm leading-6 text-gray-900">{price}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
