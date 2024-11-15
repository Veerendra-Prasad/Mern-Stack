import React from "react";

function Loginpage() {
  return (
    <div className="w-full h-screen">
      <div className="bg-teal-600 w-full h-14 flex justify-center items-center text-xl text-white">Login Page</div>
      <div className="w-full h-2/3 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-5 bg-gray-200 w-1/3 h-2/3 rounded-md">
          <div className="flex gap-5 items-center">
            <h1 className="font-semibold">UserName </h1>
            <input
              type="text"
              placeholder="Enter your Username"
              className="border-2 border-black rounded-md p-1 outline-none"
            />
          </div>
          <div className="flex gap-7 items-center">
            <h1 className="font-semibold">Password</h1>
            <input
              type="text"
              placeholder="Enter your Password"
              className="border-2 border-black rounded-md p-1 outline-none"
            />
          </div>
          <div className="">
            <button className="w-16  h-8 rounded-md text-white bg-teal-400">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;