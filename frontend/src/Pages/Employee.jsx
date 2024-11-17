import React from "react";
import { Link } from "react-router-dom";

function Employee({ id, data, deleteitem }) {
  const details = JSON.parse(data);                      // data from the local storage is parsed here 
  return (
    <div className="w-full grid grid-cols-10 place-items-center py-2 text-sm">
      <div className="overflow-hidden w-full">{id}</div>
      <div className="w-full  h-full flex overflow-hidden ">{details.img}</div>
      <div className="overflow-hidden">{details.name}</div>
      <div className="overflow-hidden w-full ">{details.email}</div>
      <div>{details.mobile}</div>
      <div>{details.designation}</div>
      <div>{details.gender}</div>
      <div>{details.course}</div>
      <div>{details.date}</div>
      <div className="w-full flex justify-around">
        <Link
          to={`/api/edit/${id}`}
          className="bg-teal-400 w-10 h-8 rounded-md text-white flex items-center justify-center"
        >
          Edit
        </Link>
        <button
          className="bg-teal-400 w-14 h-8 rounded-md text-white flex items-center justify-center"
          onClick={() => deleteitem(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Employee;
