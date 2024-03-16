import React, { useState } from 'react';
import { IoFilterSharp } from "react-icons/io5";
import FreeCollection from './FreeCollection';
const CollectionTabs = () => {
  const [activeTab, setActiveTab] = useState('Free');
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <div className="flex mt-10 ml-5">
      {/* Sidebar */}
      <div
        className={`w-1/4 bg-gray-100 transition-all duration-500 ${
          isSideBarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ maxWidth: isSideBarOpen ? '250px' : '0' }}
      >
        <button onClick={toggleSideBar} className="bg-gray-200 py-2 px-4 mb-4 focus:outline-none flex">
         <IoFilterSharp className='mr-1 mt-1'/> {isSideBarOpen ? 'Filter' : 'Filter'}
        </button>
        <button
          onClick={() => handleTabClick('Free')}
          className={`w-full py-4 ${
            activeTab === 'Free' ? 'bg-[#04ddb2] text-white hover:bg-[#04ddb2]' : 'text-gray-800 hover:bg-gray-30'
          } 0 focus:outline-none ${
            isSideBarOpen ? '' : 'hidden'
          }`}
        >
          Free
        </button>
        <button
          onClick={() => handleTabClick('Premium')}
          className={`w-full py-4 ${
            activeTab === 'Premium' ? 'bg-[#04ddb2] text-white hover:bg-[#04ddb2]' : 'text-gray-800 hover:bg-gray-300'
          }  focus:outline-none ${
            isSideBarOpen ? '' : 'hidden'
          }`}
        >
          Premium
        </button>
        <button
          onClick={() => handleTabClick('Discount')}
          className={`w-full py-4 ${
            activeTab === 'Discount' ? 'bg-[#04ddb2] text-white hover:bg-[#04ddb2]' : 'text-gray-800 hover:bg-gray-300 '
          } focus:outline-none ${
            isSideBarOpen ? '' : 'hidden'
          }`}
        >
          Discount
        </button>
      </div>

      {/* Content */}
      <div className={`flex-1 mx-20 ${
          isSideBarOpen ? 'mx-20' : 'mx-40'
        }`}>
        {activeTab === 'Free' && <FreeCollection />}
        {activeTab === 'Premium' && <p>This is Premium content.</p>}
        {activeTab === 'Discount' && <p>This is Discount content.</p>}
      </div>
    </div>
  );
};

export default CollectionTabs;