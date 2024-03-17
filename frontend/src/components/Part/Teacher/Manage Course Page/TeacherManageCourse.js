import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import TeacherManagerItems from "./TeacherManagerItems";
import { Link } from "react-router-dom";

function TeacherManageCourse() {
    return <div className="container mx-auto">
        <section className="py-8">
            <header className="h-11">
                <div className="w-full">
                    <p className="text-xl">All product: 124</p>
                    <p></p>
                </div>
            </header>
            <hr className="mb-6" />
            <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
                <div className="w-full md:w-1/2">
                    <form className="flex items-center">
                        <label for="simple-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            </div>
                            <input type="text" id="simple-search" placeholder="Search for products" required="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 " />
                        </div>
                    </form>
                </div>
                <div className="w-full md:w-1/2 flex justify-end items-center">
                    <Link to="/addcourse" className="space-x-2 w-full md:w-1/4 flex items-center justify-center bg-third text-white px-4 py-[9px] rounded-xl cursor-pointer">
                        <FontAwesomeIcon className="text-sm" icon={faPlus} />
                        <span className="text-sm">Add product</span>
                    </Link>
                </div>
            </div>
            <TeacherManagerItems />
        </section>
    </div>;
}

export default TeacherManageCourse;
