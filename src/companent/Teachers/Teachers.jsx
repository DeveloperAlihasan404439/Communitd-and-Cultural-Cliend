import React from "react";

const Teachers = () => {
  return (
    <div className="w-11/12 mx-auto pb-5 lg:flex gap-3 lg:pb-10">
      <div className="lg:w-[50%]">
        <h1 className="text-xl font-medium text-black pb-2">
          Featured Teachers
        </h1>
        <div className="py-[2px] bg-orange-600 w-[40px]"></div>
        <h1 className="text-6xl md:text-7xl font-bold text-black py-3">
          Meet Our teachers
        </h1>
        <p className="py-2 md:py-5 md:text-xl text-center md:text-left">
          Meet our outstanding Featured Teachers who are at the forefront of
          education excellence. These educators are dedicated to fostering an
          inspiring and enriching learning environment. Their passion,
          innovative teaching methods, and commitment to student success set
          them apart. Discover the expertise and unique qualities that make
          these teachers exceptional role models and guides for our students.
        </p>
        <p className=" py-2 md:py-5 md:text-xl text-center md:text-left">
          The specific description can vary depending on the context in which it
          is used, such as a school website, educational program brochure, or a
          teacher recognition program. You can tailor the description to
          highlight the achievements, qualifications, and attributes of the
          featured teachers in your specific educational setting.
        </p>

        <button className="text-2xl w-full md:w-auto font-medium py-2 px-6 border transition-all  border-orange-500 hover:text-orange-600 bg-orange-600 text-white rounded-lg hover:bg-[#112e45] my-5">
          Apply New
        </button>
      </div>
      <div className="lg:w-[50%] grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="bg-cover overflow-hidden relative rounded-lg">
          <img src="https://i.ibb.co/3ykNgd3/t-2.jpg" alt="" className = "w-full h-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125  duration-300"/>
          <div className="absolute left-0  bottom-[5%] w-full flex justify-center  text-center">
            <div className=" bg-white px-5 py-2 text-black rounded-lg shadow-lg">
              <h1 className="text-xl text-black hover:text-orange-500">
                Mark Alen
              </h1>
              <h1 className="text-gray-500">Vice Chancellor</h1>
            </div>
          </div>
        </div>
        <div className="bg-cover overflow-hidden relative rounded-lg">
          <img src="https://i.ibb.co/vY2xbF0/t-3.jpg" alt="" className = "w-full h-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125  duration-300"/>
          <div className="absolute left-0  bottom-[5%] w-full flex justify-center  text-center">
            <div className=" bg-white px-5 py-2 text-black rounded-lg shadow-lg">
              <h1 className="text-xl text-black hover:text-orange-500">
                David card
              </h1>
              <h1 className="text-gray-500">Pro Chancellor</h1>
            </div>
          </div>
        </div>
        <div className="bg-cover overflow-hidden relative rounded-lg">
          <img src="https://i.ibb.co/JBQym2Z/t-4.jpg" alt="" className = "w-full h-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125  duration-300"/>
          <div className="absolute left-0  bottom-[5%] w-full flex justify-center  text-center">
            <div className=" bg-white px-5 py-2 text-black rounded-lg shadow-lg">
              <h1 className="text-xl text-black hover:text-orange-500">
                Rebeka Alig
              </h1>
              <h1 className="text-gray-500">Aerobics head</h1>
            </div>
          </div>
        </div>
        <div className="bg-cover overflow-hidden relative rounded-lg">
          <img src="https://i.ibb.co/grcfNkP/t-1.jpg" alt="" className = "w-full h-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125  duration-300"/>
          <div className="absolute left-0  bottom-[5%] w-full flex justify-center  text-center">
            <div className=" bg-white px-5 py-2 text-black rounded-lg shadow-lg">
              <h1 className="text-xl text-black hover:text-orange-500">
                Hanna Bein
              </h1>
              <h1 className="text-gray-500">Pro Chancellor</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
