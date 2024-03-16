import React, { useState, useEffect } from "react";
import List from "./List";
import DeletedList from "./DeletedList";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("panel-1");

  useEffect(() => {
    const tabs = document.querySelectorAll(".tab");
    const indicator = document.querySelector(".indicator");
    const panels = document.querySelectorAll(".tab-panel");

    const updateIndicator = (tab) => {
      
      indicator.style.left =
        tab.getBoundingClientRect().left -
        tab.parentElement.getBoundingClientRect().left +
        "px";
    };

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const tabTarget = tab.getAttribute("aria-controls");

        updateIndicator(tab);

        panels.forEach((panel) => {
          const panelId = panel.getAttribute("id");
          if (tabTarget === panelId) {
            panel.classList.remove("invisible", "opacity-0");
            panel.classList.add("visible", "opacity-100");
          } else {
            panel.classList.add("invisible", "opacity-0");
          }
        });
      });
    });

    // Initialize the indicator position and width for the active tab
    const activeTabElement = document.getElementById(activeTab);
    if (activeTabElement) {
      updateIndicator(activeTabElement);
    }
  }, [activeTab]);

  return (
    <div className=" mx-auto px-8 sm:px-0">
      <div className="sm:w-10/12 sm:mx-auto">
        <div
          role="tablist"
          aria-label="tabs"
          className="relative w-max mx-auto h-12 grid grid-cols-2 items-center px-[3px] rounded-full overflow-hidden shadow-2xl shadow-900/20 transition flex"
        >
          <div className="absolute indicator h-11 my-auto top-0 bottom-0 left-0 rounded-full shadow-md"></div>
          <button
            role="tab"
            aria-selected={activeTab === "panel-1"}
            aria-controls="panel-1"
            id="tab-1"
            tabIndex="0"
            onClick={() => setActiveTab("panel-1")}
            className={`relative block h-10 px-6 tab rounded-full ${
              activeTab === "panel-1" ? "bg-gray-800" : ""
            }`}
          >
            <span
              className={` ${
                activeTab === "panel-1" ? "text-white" : "text-gray-800"
              }`}
            >
              Confirmation
            </span>
          </button>
          <button
            role="tab"
            aria-selected={activeTab === "panel-2"}
            aria-controls="panel-2"
            id="tab-2"
            tabIndex="-1"
            onClick={() => setActiveTab("panel-2")}
            className={`relative block h-10 px-6 tab rounded-full ${
              activeTab === "panel-2" ? "bg-gray-800" : ""
            }`}
          >
            <span
              className={`${
                activeTab === "panel-2" ? "text-white" : "text-gray-800"
              }`}
            >
              Deleted
            </span>
          </button>
        </div>
        <div className="mt-6 relative rounded-3xl bg-purple-50">
          <div
            role="tabpanel"
            id="panel-1"
            className={`tab-panel p-6 transition duration-300 ${
              activeTab === "panel-1"
                ? "visible opacity-100"
                : "invisible opacity-0"
            }`}
          >
            <List />
          </div>
          <div
            role="tabpane2"
            id="panel-2"
            className={`absolute top-0 opacity-0 tab-panel p-6 transition duration-300 ${
              activeTab === "panel-2" ? "visible opacity-100" : ""
            }`}
          >
            <DeletedList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
