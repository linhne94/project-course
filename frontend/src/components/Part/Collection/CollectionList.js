import React from "react";
import Header from "../../Header/Header";
import CollectionTabs from "./CollectionTabs";

const CollectionList = () => {
  return (
    <div>
      <Header />
      <div className="absolute mt-20 w-full">
        <div className="text-center uppercase font-bold text-2xl">
          Start choosing a course here !
        </div>

        <CollectionTabs />
      </div>
    </div>
  );
};

export default CollectionList;
