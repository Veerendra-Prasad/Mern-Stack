import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col gap-10 justify-center items-center">
      <h1 className="text-2xl ">Oops! Looks like you're at the Wrong Page</h1>
      <Link
        to={"/"}
        className="cursor-pointer hover:underline hover:decoration-blue-500 hover:text-blue-500"
      >
        Click Here To Go Back
      </Link>
    </div>
  );
}

export default NotFound;
