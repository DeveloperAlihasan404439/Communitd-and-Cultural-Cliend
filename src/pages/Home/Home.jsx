import { useLoaderData } from "react-router-dom";
import Banner from "../../companent/Banner/Banner";
import BestPlatform from "../../companent/BestPlatform/BestPlatform";
import AboutBverything from "../../companent/AboutBverything/AboutBverything";
import ApplyNew from "../../companent/ApplyNew/ApplyNew";
import Courses from "../../companent/Courses/Courses";
import Facilities from "../../companent/Facilities/Facilities";
import Teachers from "../../companent/Teachers/Teachers";
import FromNew from "../../companent/FromNew/FromNew";
import Donation from "../../companent/Donation/Donation";

const Home = () => {
  return (
    <div>
      <div  className="relative">
        <Banner />
          <BestPlatform />
      </div>
      <AboutBverything/>
      <ApplyNew/>
      <Courses/>
      <Facilities/>
      <Teachers/>
      <FromNew/>
      <Donation/>
    </div>
  );
};

export default Home;
