import React from 'react'

const ChangePassword = () => {
  return (
    <div className="w-full max-w-4xl ">
      <h1 className="text-2xl font-semibold px-7 ">Change Password</h1>

      <form className=" rounded px-8 pt-6 pb-8 mb-4">

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2 text-lg"
            htmlFor="oldPass"
          >
            Enter old password
          </label>
          <input
            className="bg-inherit appearance-none placeholder:text-sm
               focus:border-b-green-500  focus:bg-white border-b-2 border-black focus:transform-[scale3d(1.05,1.05,1.05)] focus:scale-105 transition ease-in-out 
                w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="oldPass"
            type="password"
            placeholder="Old Password"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-lg font-bold mb-2"
            htmlFor="newPass"
          >
            Enter New Password
          </label>
          <input
            className="bg-inherit appearance-none placeholder:text-sm
               focus:border-b-green-500  focus:bg-white border-b-2 border-black focus:transform-[scale3d(1.05,1.05,1.05)] focus:scale-105 transition ease-in-out 
                w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="newPass"
            type="password"
            placeholder="New Password"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-lg font-bold mb-2"
            htmlFor="reEnter"
          >
           Re-enter the Password
          </label>
          <input
            className="bg-inherit appearance-none placeholder:text-sm
               focus:border-b-green-500  focus:bg-white border-b-2 border-black focus:transform-[scale3d(1.05,1.05,1.05)] focus:scale-105 transition ease-in-out 
                w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="reEnter"
            type="password"
            placeholder="Re-enter"
          />
        </div>
        <div className="flex items-center justify-between">
        <button className="bg-[#04ddb2] hover:bg-[#03ecbe] text-white  w-full flex justify-center
         px-[40px] py-[9px] my-1 hover:transform-[scale3d(1.05,1.05,1.05)] text-sm font-semibold  rounded-full  backdrop-blur-md transition  
         transform hover:scale-105  md:flex">Save</button>
        </div>
      </form>
    </div>
  )
}

export default ChangePassword