import React from "react";

function Editpage() {
  return (
    <div className="w-full">
      <div className="bg-teal-600 w-full h-14 flex justify-center items-center text-xl text-white">
        Employee Edit
      </div>
      <div className="w-full p-10 flex justify-center items-center">
        <div className="w-1/3 flex flex-col gap-7">
          <div className="flex items-center">
            <h1 className="w-1/3 ">Name</h1>
            <input
              type="text"
              placeholder="Enter Name"
              className="px-1 rounded-md outline-none border-2 border-black"
            />
          </div>
          <div className="flex items-center">
            <h1 className="w-1/3">Email</h1>
            <input
              type="text"
              placeholder="Enter Email"
              className="px-1 rounded-md outline-none border-2 border-black"
            />
          </div>
          <div className="flex items-center">
            <h1 className="w-1/3">Mobile No</h1>
            <input
              type="number"
              placeholder="Enter Mobile No"
              className="px-1 rounded-md outline-none border-2 border-black"
            />
          </div>
          <div className="flex items-center">
            <h1 className="w-1/3">Designation</h1>
            <select name="" id="" className="border-2 border-black rounded-md">
              <option value="HR">HR</option>
              <option value="Manager">Manager</option>
              <option value="sales">sales</option>
            </select>
          </div>
          <div className="flex">
            <h1 className="w-1/3">Gender</h1>
            <div className="flex">
              <div className="flex items-center gap-1 mr-3">
                <input type="radio" name="Male" id="Male" />
                <label htmlFor="Male">Male</label>
              </div>
              <div className="flex items-center gap-1">
                <input type="radio" name="Female" id="Female" />
                <label htmlFor="Female">Female</label>
              </div>
            </div>
          </div>
          <div className="flex">
            <h1 className="w-1/3">Course</h1>
            <div className="flex gap-3">
              <section className="gap-1 flex items-center">
                <input type="checkbox" name="" id="MCA" />
                <label htmlFor="MCA">MCA</label>
              </section>
              <section className="gap-1 flex items-center">
                <input type="checkbox" name="" id="BCA" />
                <label htmlFor="BCA">BCA</label>
              </section>
              <section className="gap-1 flex items-center">
                <input type="checkbox" name="" id="BSC" />
                <label htmlFor="BSC">BSC</label>
              </section>
            </div>
          </div>
          <div className="flex">
            <h1 className="w-1/3">Img Upload</h1>
            <input type="file" />
          </div>
          <div className="w-full flex justify-center items-center">
            <button className="w-16 h-8 rounded-md text-white bg-teal-400">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editpage;
