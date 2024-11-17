import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { verify } from "../Components/Duplicate";

function Editpage() {
  const params = useParams(); // using params hook to get the key from the URL
  const details = JSON.parse(localStorage.getItem(params.id));
  const [data, setData] = useState({ ...details, img: "" });
  const [list, setList] = useState([details.course]);

  async function submitChange() {
    // function for server side validation
    const time = new Date().toLocaleDateString();
    setData({ ...data, date: time, course: list[0] });
    if (!(data.designation && data.gender && data.name && data.img)) {
      return window.alert("Please fill all the details");
    }
    if (verify(params.id ,data.email)) {
      return window.alert("The email is already registered in the database");
    }
    try {
      console.log(data);
      const result = await axios.put("http://localhost:5000/api/edit", {
        body: { ...data, date: time, course: list[0] },
      });
      const response = result.data;
      localStorage.setItem(params.id, JSON.stringify(response.data.body));
      window.alert(response.message);
    } catch (error) {
      const response = error.response.data;
      window.alert(response.message);
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
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center">
            <h1 className="w-1/3">Mobile No</h1>
            <input
              type="number"
              placeholder="Enter Mobile No"
              className="px-1 rounded-md outline-none border-2 border-black"
              name="mobile"
              value={data.mobile}
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
                  checked={data.gender === "Male" ? true : false}
                  value={"Male"}
                />
                <label htmlFor="Male">Male</label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  name="gender"
                  id="Female"
                  checked={data.gender === "Female" ? true : false}
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
                  checked={list[0] === "MCA" ? true : false}
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
                  checked={list[0] === "BCA" ? true : false}
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
                  checked={list[0] === "BSC" ? true : false}
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
              onClick={() => submitChange()}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editpage;
