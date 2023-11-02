import Education from "../Education/Education";

const Courses = () => {
  return (
    <div className="bg-[#ECEFF1] my-4 py-5">
      <div className="w-11/12 mx-auto pt-5 md:pt-10">
        <h1 className="text-xl font-medium text-black pb-2">Our course</h1>
        <div className="py-[2px] bg-orange-600 w-[40px]"></div>
        <h1 className="text-6xl md:text-7xl font-bold text-black py-3">
          Featured courses
        </h1>
        <Education />
      </div>
    </div>
  );
};

export default Courses;
