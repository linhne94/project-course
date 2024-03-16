import React from "react";
import Sidebar from "./Sidebar";
import { dataTeacher } from "../../../data/dataTeacher";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
const ManageTeacher = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold">Manage Teacher</h1>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 my-12">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="p-4">
                Name
              </th>

              <th scope="col" class="p-4">
                State
              </th>
              <th scope="col" class="p-4">
                Country
              </th>
              <th scope="col" class="p-4">
                
              </th>
            </tr>
          </thead>
     
        <tbody>
          {dataTeacher.teacher.map((item, index) => (
            <React.Fragment key={index}>
              <tr
                className={`border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 w-full `}
              >
                <td
                  scope="row"
                  class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div class="flex items-center mr-3">
                    <span class="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                      {item.name}
                    </span>
                  </div>
                </td>
                <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <div class="flex items-center">{item.state}</div>
                </td>
                <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <div class="flex items-center">{item.country}</div>
                </td>
                <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white w-52">
                  <div class="flex items-center space-x-4">
                    <button
                      type="button"
                      data-drawer-target="drawer-update-product"
                      data-drawer-show="drawer-update-product"
                      aria-controls="drawer-update-product"
                      class="py-2 px-3 flex items-center text-sm font-medium text-center text-primary focus:outline-none bg-white rounded-lg border border-primary hover:bg-primary hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      <MdOutlineModeEditOutline className="pr-2 w-6" />
                      Edit
                    </button>
                    {/* <button
                  onClick={() => {
                    navigate("/preview");
                  }}
                  type="button"
                  data-drawer-target="drawer-read-product-advanced"
                  data-drawer-show="drawer-read-product-advanced"
                  aria-controls="drawer-read-product-advanced"
                  class="py-2 px-3 flex items-center text-sm font-medium text-center text-primary focus:outline-none bg-white rounded-lg border border-primary hover:bg-primary hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  <FaEye className="pr-2 w-6" />
                  <a href={`preview/${item.courseId}`}>Preview</a>
                </button> */}
                    <button
                      type="button"
                      data-modal-target="delete-modal"
                      data-modal-toggle="delete-modal"
                      class="flex items-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                    >
                      <FaRegTrashAlt className="pr-2 w-6" />
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageTeacher;
