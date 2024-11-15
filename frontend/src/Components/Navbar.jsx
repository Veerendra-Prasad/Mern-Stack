import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full h-12 bg-teal-200 ">
      <ul className="w-full flex justify-around h-full items-center">
        <Link to={"/"}>
            <li className="hover:text-white cursor-pointer">Home</li>
        </Link>
        <Link to={"/employeelist"}>
            <li className="hover:text-white cursor-pointer">Employee List</li>
        </Link>
        <li className="hover:text-white cursor-pointer">Hukum Gupta -</li>
        <li className="hover:text-white cursor-pointer">Logout</li>
      </ul>
    </div>
  );
}

export default Navbar;
