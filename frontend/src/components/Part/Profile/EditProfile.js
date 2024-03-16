import React from "react";

const EditProfile = () => {
  return (
    <div className="w-full max-w-4xl">
      <h1 className="text-2xl font-semibold px-7 ">Edit Profile</h1>

      <form className=" rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4 flex">
          <div className="w-1/2 pr-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="bg-inherit appearance-none placeholder:text-sm
               focus:border-b-[#04ddb2]  focus:bg-white border-b-2 border-black focus:transform-[scale3d(1.05,1.05,1.05)] focus:scale-105 transition ease-in-out 
                w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="city"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div className="w-1/2 pl-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="secondName"
            >
              Second Name
            </label>
            <input
              className="bg-inherit appearance-none placeholder:text-sm
               focus:border-b-[#04ddb2]  focus:bg-white border-b-2 border-black focus:transform-[scale3d(1.05,1.05,1.05)] focus:scale-105 transition ease-in-out 
                w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="secondName"
              type="text"
              placeholder="Second Name"
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="bg-inherit appearance-none placeholder:text-sm
               focus:border-b-[#04ddb2]  focus:bg-white border-b-2 border-black focus:transform-[scale3d(1.05,1.05,1.05)] focus:scale-105 transition ease-in-out 
                w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="address"
          >
            Address
          </label>
          <input
            className="bg-inherit appearance-none placeholder:text-sm
               focus:border-b-[#04ddb2]  focus:bg-white border-b-2 border-black focus:transform-[scale3d(1.05,1.05,1.05)] focus:scale-105 transition ease-in-out 
                w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            type="text"
            placeholder="Address"
          />
        </div>
        <div className="mb-4 flex">
          <div className="w-1/2 pr-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="city"
            >
              City
            </label>
            <input
              className="bg-inherit appearance-none placeholder:text-sm
               focus:border-b-[#04ddb2]  focus:bg-white border-b-2 border-black focus:transform-[scale3d(1.05,1.05,1.05)] focus:scale-105 transition ease-in-out 
                w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="city"
              type="text"
              placeholder="City"
            />
          </div>
          <div className="w-1/2 pl-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="state"
            >
              State
            </label>
            <input
              className="bg-inherit appearance-none placeholder:text-sm
               focus:border-b-[#04ddb2]  focus:bg-white border-b-2 border-black focus:transform-[scale3d(1.05,1.05,1.05)] focus:scale-105 transition ease-in-out 
                w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="state"
              type="text"
              placeholder="State"
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phoneNumber"
          >
            Phone Number
          </label>
          <input
            className="bg-inherit appearance-none placeholder:text-sm
               focus:border-b-[#04ddb2]  focus:bg-white border-b-2 border-black focus:transform-[scale3d(1.05,1.05,1.05)] focus:scale-105 transition ease-in-out 
                w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phoneNumber"
            type="tel"
            placeholder="Phone Number"
          />
        </div>
        <div className="flex items-center justify-between">
        <button className="bg-[#04ddb2] hover:bg-[#03ecbe] text-white  w-full flex justify-center
         px-[40px] py-[9px] my-1 hover:transform-[scale3d(1.05,1.05,1.05)] text-sm font-semibold  rounded-full  backdrop-blur-md transition  
         transform hover:scale-105  md:flex">Save</button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
