import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const SingleEducation = () => {
  const singleEducation = useLoaderData();
  const {
    _id,
    title,
    description,
    country,
    thumbnail_url,
    price,
    rating,
    author_education,
    author_images,
    author_name,
    author_sub
  } = singleEducation;
  return (
    <div className="w-11/12 mx-auto md:grid grid-cols-2 gap-4 py-5 items-center">
      <div className="h-full">
        <img src={thumbnail_url} alt="" className="w-full h-[100%] rounded-lg shadow-xl"/>
      </div>
      <div>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-medium text-orange-600">
          {title}
        </h1>
        <p className="text-lg md:text-xl py-3">{description}</p>
        <p className="text-xl font-mono text-orange-500">Country : {country}</p>
        <div className="flex gap-10">
          <p className="text-xl font-mono text-black">Price : {price}</p>
          <p className="text-xl font-mono text-black">Rating : {rating}</p>
        </div>
        <div className="py-4">
            <h1 className="text-xl md:text-2xl font-medium text-black">Author</h1>
            <div className="py-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[50px]"></div>
        </div>
        <div className="flex justify-between">
            <div className="flex gap-3">
            <img src={author_images} alt="" className="w-[100px] rounded-[50%] p-2 border-2 border-orange-600"/>
            <div>
                <h1 className="text-xl text-black">{author_name}</h1>
                <h1 className="text-black">{author_sub}</h1>
                <h1 className="text-black">{author_education}</h1>
            </div>
            </div>
            <Link to={`/addCoruser/${_id}`}>
              <button className="py-2 px-6 text-2xl text-white bg-[#162e42] font-medium rounded-lg drop-shadow-2xl hover:bg-[#06141f] ">Add Course</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleEducation;
