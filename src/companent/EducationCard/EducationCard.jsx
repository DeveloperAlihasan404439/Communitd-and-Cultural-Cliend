import Rating from "react-rating";
import { BsStarFill,BsStarHalf,BsFillHeartFill } from 'react-icons/bs';
import './EducationCard.css'
import { Link } from "react-router-dom";
const EducationCard = ({ educationdata }) => {
  const { 
    _id,
    title,
    thumbnail_url,
    price,
    rating,
    love,
    author_images,
    author_name,
  } = educationdata;
  return (
    <div className="border bg-white rounded-xl ">
      
      <div className="overflow-hidden rounded-lg ">
        <img
          src={thumbnail_url}
          alt=""
          className="w-full h-[300px] rounded-t-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
        />
        <div className="mx-5 py-7">
          <div className="flex gap-6 items-center">
          <Rating
            placeholderRating={rating}
            emptySymbol={<BsStarHalf/>}
            placeholderSymbol={<BsStarFill/>}
            fullSymbol={<BsStarFill/>}
            className="text-orange-400 text-2xl"
          />
          <h1>(20 Reviews)</h1>
          </div>
          <h1 className="text-3xl pt-4 font-medium">{title}</h1>
          <h1 className="text-xl pt-4 font-medium">Price {price}</h1>
          <div className="divider"></div> 
          <div className="flex justify-between mb-4">
            <div className="flex items-center gap-4">
                <img src={author_images} alt="" className="w-[45px] h-[40px] rounded-[50%]"/>
                <h1 className="text-xl">{author_name}</h1>
            </div>
            <div className="flex items-center gap-4">
                <h1 className="pt-2"><BsFillHeartFill className="text-2xl text-red-500"/></h1>
                <h1 className="text-xl">{love}</h1>
            </div>
          </div>
          <Link to={`/education/${_id}`} className="flex justify-center w-auto"><button className="details">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
