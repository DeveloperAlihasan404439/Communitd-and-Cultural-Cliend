import React, { useContext } from "react";
import addCourse from "./added.json";
import Lottie from "lottie-react";
import course from "../../assets/course.png";
import Typewriter from "typewriter-effect";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProviderContext/AuthProviderContext";
import axios from "axios";
import Swal from "sweetalert2";
const AddCourses = () => {
  const loader = useLoaderData();
  const { _id, thumbnail_url, title, price } = loader;
  const { user } = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()
  const hendelCourseAdd = e =>{
    e.preventDefault()
    const target = e.target;
    const name = target.name.value;
    const title = target.title.value;
    const email = target.email.value;
    const date = target.date.value;
    const phone = target.phone.value;
    console.log(name, title, email, date, phone);
    axios.post('http://localhost:5000/courses',{_id, thumbnail_url,title,price,name,email,date,phone})
    .then(res => {
        if(res.data.insertedId){
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Successfull added the course',
                showConfirmButton: false,
                timer: 1500
              })
              return navigate(location?.state? location.state : '/')
        }})
    .catch(error => console.log(error.message))
  }
  return (
    <div className="bg-base-200">
      <div className="mb-5 relative ">
        <img
          src={course}
          alt=""
          className="w-full h-[100vh] md:h-[70vh] rounded-b-2xl"
        />
        <div
          className="absolute top-0  w-full h-full md:flex items-center rounded-b-2xl"
          style={{
            background:
              "linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0.00) 100%)",
          }}
        >
          <div className="w-11/12 mx-auto md:flex items-center gap-10 md:flex-row-reverse">
            <div className="md:w-[50%]">
              <Lottie
                animationData={addCourse}
                loop={true}
                className="w-full"
              />
            </div>
            <div className="md:w-[50%] text-white">
              <h1 className="text-2xl md:text-3xl font-medium pb-4">
                Effective Time Management Course 🏠?
              </h1>
              <div className="text-xl md:text-2xl font-medium">
                <Typewriter
                  options={{
                    strings: [
                      "Enroll in our 'Effective Time Management Course' 🏠? and acquire essential skills to boost productivity",
                      "Learn to prioritize tasks, minimize distractions, and optimize daily routines. ✅",
                      " Ideal for students and professionals.",
                      "Take control of your schedule with this empowering time [🕑] management course",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 40,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto">
        <h1 className ="text-2xl md:text-3xl font-medium text-center text-black pt-4 md:pt-7">Added The Course</h1>
        <form onSubmit={hendelCourseAdd} className="card-body md:w-8/12 mx-auto">
          <div className="md:flex justify-between gap-3 ">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                className="input input-bordered"
                name = 'name'
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Coruse Title</span>
              </label>
              <input
                type="text"
                defaultValue={title}
                className="input input-bordered"
                name='title'
                required
              />
            </div>
          </div>
          <div className="md:flex justify-between gap-3 ">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                defaultValue={user?.email}
                className="input input-bordered"
                name='email'
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Data 🕐</span>
              </label>
              <input
                type="date"
                className="input input-bordered"
                name ='date'
                required
              />
            </div>
          </div>
          <div className="md:flex justify-between gap-3 md:mb-3">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Phone </span>
              </label>
              <input
                type="number"
                placeholder="Phone"
                className="input input-bordered"
                name='phone'
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Prices</span>
              </label>
              <input
                type="text"
                defaultValue={'$'+price}
                className="input input-bordered"
                name='price'
                required
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#06141f] text-white hover:bg-[#06141f]">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourses;
