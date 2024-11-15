import React from "react";
import { Link } from "react-router-dom";

function Listpage() {
  return (
    <div className="w-full">
      <div className="w-full flex justify-end py-5">
        <div className="mr-10 flex items-center gap-10">
          <h1>Total Count : 0</h1>
          <Link to={"/create"} className="w-32 h-8 rounded-md text-white bg-teal-400 flex items-center justify-center">
            Create Employee
          </Link>
        </div>
      </div>
      <div className="w-full flex justify-end bg-teal-300 py-3 items-center">
        <div className="mr-10 flex gap-10">
          <h1>Search</h1>
          <input
            type="text"
            className="border-2 border-black rounded-md px-2"
            placeholder="Enter Search Keyword"
          />
        </div>
      </div>
      <div className="w-full grid grid-cols-10 bg-teal-300 place-items-center py-2">
        <div>Unique Id</div>
        <div>Image</div>
        <div>Name</div>
        <div>Email</div>
        <div>Mobile No</div>
        <div>Designation</div>
        <div>Gender</div>
        <div>Course</div>
        <div>Create Date</div>
        <div>Action</div>
      </div>
    </div>
  );
}

export default Listpage;
