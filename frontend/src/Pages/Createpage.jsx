import React, { useState } from "react";
import { nanoid } from "nanoid";
import { email, name } from "../Components/Verfication";

function Createpage() {
  const [list, setList] = useState([]);

  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    designation: "",
    gender: "",
    course: "",
    img: "",
    date: "",
  });

  function submitChange() {
    const key = nanoid();
    const time = new Date().toLocaleDateString();
    if (
      data.designation &&
      data.email &&
      data.gender &&
      data.img &&
      data.mobile &&
      data.name
    ) {
      if (email(data.email) && name(data.name)) {
        setData({ ...data, date: time, course: list[0] });
        localStorage.setItem(key, JSON.stringify(data));
      } else {
        alert("Please Enter Correct Values");
      }
    } else {
      alert("Please fill all the details");
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  function handleChecked(e) {
    const { value, checked } = e.target;
    if (checked) {
      if (list.length > 0) {
        alert("Please Choose only one Course");
        e.target.checked = false;
      } else {
        setList([...list, value]);
      }
    } else {
      setList(list.filter((item) => item !== value));
    }
  }

  return (
    <div className="w-full">
      <div className="bg-teal-600 w-full h-14 flex justify-center items-center text-xl text-white">
        Create Employee
      </div>
      <div className="w-full p-10 flex justify-center items-center">
        <div className="w-1/3 flex flex-col gap-7">
          <div className="flex items-center">
            <h1 className="w-1/3 ">Name</h1>
            <input
              type="text"
              placeholder="Enter Name"
              className="px-1 rounded-md outline-none border-2 border-black"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center">
            <h1 className="w-1/3">Email</h1>
            <input
              type="text"
              placeholder="Enter Email"
              className="px-1 rounded-md outline-none border-2 border-black"
              value={data.email}
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center">
            <h1 className="w-1/3">Mobile No</h1>
            <input
              type="number"
              placeholder="Enter Mobile No"
              className="px-1 rounded-md outline-none border-2 border-black"
              value={data.mobile}
              name="mobile"
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center">
            <h1 className="w-1/3">Designation</h1>
            <select
              name="designation"
              value={data.designation}
              onChange={handleChange}
              className="border-2 border-black rounded-md"
            >
              <option value={null}>--none--</option>
              <option value="HR">HR</option>
              <option value="Manager">Manager</option>
              <option value="sales">sales</option>
            </select>
          </div>
          <div className="flex">
            <h1 className="w-1/3">Gender</h1>
            <div className="flex">
              <div className="flex items-center gap-1 mr-3">
                <input
                  type="radio"
                  name="gender"
                  id="Male"
                  onChange={handleChange}
                  value={"Male"}
                />
                <label htmlFor="Male">Male</label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  name="gender"
                  id="Female"
                  onChange={handleChange}
                  value={"Female"}
                />
                <label htmlFor="Female">Female</label>
              </div>
            </div>
          </div>
          <div className="flex">
            <h1 className="w-1/3">Course</h1>
            <div className="flex gap-3">
              <section className="gap-1 flex items-center">
                <input
                  type="checkbox"
                  name="course"
                  id="MCA"
                  onChange={handleChecked}
                  value={"MCA"}
                />
                <label htmlFor="MCA">MCA</label>
              </section>
              <section className="gap-1 flex items-center">
                <input
                  type="checkbox"
                  name="course"
                  id="BCA"
                  onChange={handleChecked}
                  value={"BCA"}
                />
                <label htmlFor="BCA">BCA</label>
              </section>
              <section className="gap-1 flex items-center">
                <input
                  type="checkbox"
                  name="course"
                  id="BSC"
                  onChange={handleChecked}
                  value={"BSC"}
                />
                <label htmlFor="BSC">BSC</label>
              </section>
            </div>
          </div>
          <div className="flex">
            <h1 className="w-1/3">Img Upload</h1>
            <input
              type="file"
              name="img"
              value={data.img}
              onChange={handleChange}
            />
          </div>
          <div className="w-full flex justify-center items-center">
            <button
              className="w-16 h-8 rounded-md text-white bg-teal-400"
              onClick={submitChange}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Createpage;
