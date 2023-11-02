import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import video from "../../assets/education video.mp4";
const Facilities = () => {
  return (
    <div className="md:flex bg-[#112e45] items-center my-5 lg:my-20">
      <div className="md:w-[50%] h-full">
        <Video autoPlay loop>
          <source src={video} type="video/webm" />
        </Video>
      </div>
      <div className="md:w-[50%] px-3 md:pl-10">
        <h1 className="text-3xl md:text-4xl font-bold py-3 md:py-6 text-white">
          Our Facilities
        </h1>
        <div>
            <div className="flex gap-4 text-white pb-7 transition-all">
                <img src="https://i.ibb.co/ZLVtsNg/f-1.png" alt="" />
                <div>
                <h1 className="text-3xl pb-2">Global Certificate</h1>
                <p>Gravida nibh vel velit auctor aliquetn auci elit cons solliazcitudirem sem quibibendum sem nibhutis.</p>
                </div>
            </div>
            <div className="flex gap-4 text-white pb-7">
            <img src="https://i.ibb.co/qnwJWHJ/f-2.png" alt="" />
                <div>
                <h1 className="text-3xl pb-2">Alumni Support</h1>
                <p>Gravida nibh vel velit auctor aliquetn auci elit cons solliazcitudirem sem quibibendum sem nibhutis.</p>
                </div>
            </div>
            <div className="flex gap-4 text-white pb-7">
            <img src="https://i.ibb.co/9r2CXBj/f-3.png" alt="" />
                <div>
                <h1 className="text-3xl pb-2">Books & Library</h1>
                <p>Gravida nibh vel velit auctor aliquetn auci elit cons solliazcitudirem sem quibibendum sem nibhutis.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
