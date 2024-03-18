import { faMagnifyingGlass, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function TeacherManagerItems() {

    const id = 1


    return <div className="overflow-x-auto my-8">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" class="p-4">Course name</th>
                    <th scope="col" class="p-4">Collection</th>
                    <th scope="col" class="p-4">Price</th>
                    <th scope="col" class="p-4">Participants</th>
                    <th scope="col" class="p-4">Chapters</th>
                    <th scope="col" class="p-4">Update</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b text-black hover:bg-gray-100 " id={id}>
                    <td className="p-4">Course 1</td>
                    <td className="p-4">Collection 1</td>
                    <td className="p-4">$19.99</td>
                    <td className="p-4">150</td>
                    <td className="p-4">10</td>
                    <td className="p-4 w-[20%]">
                        <div className="flex items-center space-x-2">
                            <Link to={`/previewcourse/${id}`} className="text-sm text-white opacity-70 bg-primary space-x-2 px-3 py-2 rounded hover:opacity-100  focus:outline-none  flex items-center">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                                <span>preview</span>
                            </Link>
                            <button className="text-sm text-red-600 bg-red-200 space-x-2 px-3 py-2 rounded hover:bg-red-300 focus:outline-none focus:bg-red-300 flex items-center">
                                <FontAwesomeIcon icon={faTrash} />
                                <span>delete</span>
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>;
}

export default TeacherManagerItems;
