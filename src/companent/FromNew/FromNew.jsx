import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { FaMapMarkerAlt, FaRegCalendarAlt } from "react-icons/fa";
import moment from "moment";
moment().format();

const FromNew = () => {
  return (
    <div className="bg-[#ECEFF1] py-5">
      <div className="w-11/12 mx-auto">
        <h1 className="text-xl font-medium text-black pb-2">Latest News</h1>
        <div className="py-[2px] bg-orange-600 w-[40px]"></div>
        <h1 className="text-6xl md:text-7xl font-bold text-black py-3 mb-3">
          From the news
        </h1>
        <div className="md:grid grid-cols-2 gap-4">
          <div>
            <img
              src="https://i.ibb.co/LgnbBzk/n-1.jpg"
              alt=""
              className="w-full"
            />
            <div>
              <div className="flex gap-1 md:gap-2 pt-3 items-center justify-center md:justify-start text-sm md:text-xl text-black">
                <FaRegCalendarAlt className="text-orange-500" />
                <h1>{moment().format("dddd, DD MMMM YYYY")}</h1>
                <h1>By Adam Ali Hasan</h1>
              </div>
              <h1 className="text-lg md:text-xl lg:text-2xl font-medium text-black hover:text-orange-500 py-0 md:py-2">
                Tips to grade high cgpa in university life
              </h1>
              <p>
                To achieve a high CGPA in university, prioritize effective time
                management, attend classes regularly, engage actively in
                discussions, seek help when needed, maintain a consistent study
                schedule, and utilize resources like libraries and online
                materials. Stay organized, set goals, and practice
                self-discipline to excel academically.
              </p>
            </div>
          </div>
          <div>
            <div className="flex gap-2 pb-3">
              <img src="https://i.ibb.co/R9XYytY/ns-1.jpg" alt="" />
              <div>
                <div className="flex gap-1 md:gap-2 items-center justify-center md:justify-start text-sm text-black">
                  <FaRegCalendarAlt className="text-orange-500" />
                  <h1>{moment().format("dddd, DD MMMM YYYY")}</h1>
                  <h1>By Adam Ali Hasan</h1>
                </div>
                <h1 className="text-lg md:text-xl lg:text-2xl font-medium text-black hover:text-orange-500 py-0 md:py-2">
                Intellectual communication
                </h1>
                <p>
                  To achieve a high CGPA in university, prioritize effective
                  time management, attend classes regularly, engage actively in
                  discussions,
                </p>
              </div>
            </div>
            <div className="flex gap-2 pb-3">
              <img src="https://i.ibb.co/vY8yTP0/ns-2.jpg" alt="" />
              <div>
                <div className="flex gap-1 md:gap-2 items-center justify-center md:justify-start text-sm text-black">
                  <FaRegCalendarAlt className="text-orange-500" />
                  <h1>{moment().format("dddd, DD MMMM YYYY")}</h1>
                  <h1>By Adam Ali Hasan</h1>
                </div>
                <h1 className="text-lg md:text-xl lg:text-2xl font-medium text-black hover:text-orange-500 py-0 md:py-2">
                Study makes you perfect
                </h1>
                <p>
                  To achieve a high CGPA in university, prioritize effective time
                  management, attend classes regularly, engage actively in
                </p>
              </div>
            </div>
            <div className="flex gap-2 pb-3">
              <img src="https://i.ibb.co/mFpfPTC/ns-3.jpg" alt="" />
              <div>
                <div className="flex gap-1 md:gap-2 items-center justify-center md:justify-start text-sm text-black">
                  <FaRegCalendarAlt className="text-orange-500" />
                  <h1>{moment().format("dddd, DD MMMM YYYY")}</h1>
                  <h1>By Adam Ali Hasan</h1>
                </div>
                <h1 className="text-lg md:text-xl lg:text-2xl font-medium text-black hover:text-orange-500 py-0 md:py-2">
                  Technology eduction is now....
                </h1>
                <p>
                  To achieve a high CGPA in university, prioritize effective
                  time management, attend classes regularly, engage actively in
                  discussions, seek help when needed,
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromNew;
