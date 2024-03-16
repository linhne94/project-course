import React from "react";
import TrackItems from "./TrackItems";

function TrackLearning() {
  return <div className=" overflow-y-auto overflow-x-hidden w-[23%] h-[100vh] pb-16">
    <div className="mt-[56px] w-full">
      <header className="flex items-center py-4 px-5 border-b border-gray-400">
        <h1 className="font-medium text-lg">Nội dung khóa học</h1>
      </header>
        <TrackItems/>
    </div>
  </div>;
}

export default TrackLearning;
