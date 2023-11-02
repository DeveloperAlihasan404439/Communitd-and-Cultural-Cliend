import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProviderContext/AuthProviderContext";
import banner from "../../assets/course.png";
import UserCouresTable from "./UserCouresTable";
import useAxios from "../../companent/Hooks/useAxios";
const UserCoures = () => {
  const { user } = useContext(AuthContext);
  const [courses, setCourses] = useState([]);
  const axiosScuery = useAxios()
  const url = `/courses?email=${user?.email}`
  useEffect(() => {
    /* axios
      .get(`http://localhost:5000/courses?email=${user?.email}`, {withCredentials: true})
      .then((res) => setCourses(res.data))
      .catch((error) => console.log(error.message)); */
      axiosScuery.get(url)
      .then(res => setCourses(res.data))
  }, [url,axiosScuery]);
  return (
    <div>
      <div className="mb-5 relative ">
        <img src={banner} alt="" className="w-full h-[70vh]" />
        <div
          className="absolute top-0  w-full h-full flex items-center"
          style={{
            background:
              "linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0.00) 100%)",
          }}
        >
          <h1 className="text-white text-2xl md:text-6xl font-bold w-10/12 mx-auto">
            The Strategies for <br />{" "}
            <span className="text-4xl text-orange-500">
              {" "}
              Learning Success. ✍
            </span>
          </h1>
        </div>
        <div
          className="absolute bottom-0 left-[50%] [transform:translateX(-50%)] w-[300px] py-3 text-center"
          style={{
            backgroundColor: "#112e45",
            clipPath: `polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)`,
          }}
        >
          <h1 className="text-orange-500 text-2xl">Home/Courses</h1>
        </div>
      </div>
      <div className="w-11/12 mx-auto">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th className="text-2xl font-normal text-black">Coures</th>
                <th className="text-2xl font-normal text-black">User</th>
                <th className="text-2xl font-normal text-black">Price</th>
                <th className="text-2xl font-normal text-black">Date</th>
              </tr>
            </thead>
            <tbody>
            {courses?.map(course => <UserCouresTable key={course._id} course={course}/>)}
            </tbody>;
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserCoures;
