import { FaRegCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import moment from "moment";
moment().format();
const AboutBverything = () => {
  return (
    <div className="mt-6 lg:mt-44 w-11/12 lg:h-[90vh] mx-auto lg:flex gap-2 justify-between">
      <div className="lg:w-[50%]">
        <h1 className="text-xl font-medium text-black pb-2">About us</h1>
        <div className="py-[2px] bg-orange-600 w-[40px]"></div>
        <h1 className="text-6xl md:text-7xl font-bold text-black py-3">
          Welcome to <br /> eventbrite
        </h1>
        <p className="lg:w-10/12 py-5 text-black text-lg">
          The premier online platform for creating, promoting, and discovering
          remarkable events. With a rich history of connecting people to
          experiences they love, Eventbrite is the go-to destination for event
          organizers and attendees alike. In this comprehensive introduction,
          well explore the myriad facets of Eventbrite and why it is the ideal
          choice for your event needs.
        </p>
        <p className="lg:w-10/12 py-5 text-black text-lg">
          Eventbrite is a dynamic, user-friendly platform designed to empower
          event organizers and revolutionize the way events are planned and
          executed. From small, intimate gatherings to large-scale conferences
          and virtual events, Eventbrite provides a robust set of tools to
          ensure that your event is a resounding success.
        </p>
        <button className="text-2xl font-medium py-2 px-6 bg-orange-600 text-white rounded-lg hover:bg-[#112e45] my-5">
          Learn More
        </button>
      </div>
      <div className="lg:w-[50%] relative">
        <img
          src="https://i.ibb.co/jHYDfFy/student.jpg"
          alt=""
          className="h-full w-full"
        />
        <div className="absolute top-0 left-0 p-2 lg:p-5 w-full h-full bg-[#ffffff8a]">
          <div className="w-full h-full  flex justify-center items-center border-2 border-[#ffffffb9] bg-[#ffffff86] rounded-xl shadow-xl  text-center md:text-left lg:p-10">
            <div>
              <h1 className="text-black text-xl m-0 md:text-3xl lg:text-5xl font-medium text-">
                Upcoming events
              </h1>
              <div className="md:pt-3 ">
                <div className="flex gap-1 md:gap-6 items-center justify-center md:justify-start text-sm md:text-xl text-black">
                  <FaRegCalendarAlt className="text-orange-500" />
                  <h1>{moment().format("dddd, DD MMMM YYYY")}</h1>
                </div>
                <h1 className="text-lg md:text-xl lg:text-4xl font-medium text-black hover:text-orange-500 py-0 md:py-2">
                  Campus clean workshop
                </h1>
                <div className="flex flex-col md:flex-row md:gap-10 md:pb-4 items-center text-center w-full justify-center md:justify-start lg:gap-20 ">
                  <div className="flex items-center gap-1 md:gap-4 text-lg lg:text-xl">
                    <BiTimeFive className="text-orange-500 text-2xl" />
                    <h1>10:00 Am - 3:00 Pm</h1>
                  </div>
                  <div className="flex items-center md:gap-4 text-lg lg:text-xl">
                    <FaMapMarkerAlt className="text-orange-500 text-2xl" />
                    <h1>Rangpur, Dhaka</h1>
                  </div>
                </div>
                <div className="divider my-0 md:my-2"></div>
              </div>
              <div className="md:pt-2">
                <div className="flex  gap-1 md:gap-6 items-center justify-center md:justify-start text-lg md:text-xl text-black">
                  <FaRegCalendarAlt className="text-orange-500" />
                  <h1>{moment().format("dddd, DD MMMM YYYY")}</h1>
                </div>
                <h1 className="text-lg md:text-xl lg:text-4xl font-medium text-black hover:text-orange-500 py-0 md:py-2">
                  Tech Summit
                </h1>
                <div className="flex flex-col md:flex-row md:gap-10 md:pb-4 items-center text-center w-full justify-center md:justify-start lg:gap-20 ">
                  <div className="flex items-center md:gap-4 text-lg lg:text-xl">
                    <BiTimeFive className="text-orange-500 text-2xl" />
                    <h1>10:00 Am - 3:00 Pm</h1>
                  </div>
                  <div className="flex items-center md:gap-4 text-lg lg:text-xl">
                    <FaMapMarkerAlt className="text-orange-500 text-2xl" />
                    <h1>Rangpur, Dhaka</h1>
                  </div>
                </div>
                <div className="divider my-0 md:my-2"></div>
              </div>
              <div className="md:pt-2">
                <div className="flex  gap-2 md:gap-6 items-center justify-center md:justify-start text-lg md:text-xl text-black">
                  <FaRegCalendarAlt className="text-orange-500" />
                  <h1>{moment().format("dddd, DD MMMM YYYY")}</h1>
                </div>
                <h1 className="text-lg md:text-xl lg:text-4xl font-medium text-black hover:text-orange-500 py-0 md:py-2">
                  Environment conference
                </h1>
                <div className="flex flex-col md:flex-row md:gap-10 md:pb-4 items-center text-center w-full justify-center md:justify-start lg:gap-20 ">
                  <div className="flex items-center md:gap-4 text-lg lg:text-xl">
                    <BiTimeFive className="text-orange-500 text-2xl" />
                    <h1>10:00 Am - 3:00 Pm</h1>
                  </div>
                  <div className="flex items-center md:gap-4 text-lg lg:text-xl">
                    <FaMapMarkerAlt className="text-orange-500 text-2xl" />
                    <h1>Rangpur, Dhaka</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBverything;
