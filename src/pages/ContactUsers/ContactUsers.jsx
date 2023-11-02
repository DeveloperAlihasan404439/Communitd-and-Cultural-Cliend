import { useLoaderData } from "react-router-dom";

const ContactUsers = () => {
    const contactusers = useLoaderData()
    console.log(contactusers);
  return (
    <div>
      <div
        className="h-[50vh] "
        style={{
          backgroundImage: "url('https://i.ibb.co/FgHj81F/page-banner-1.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-[#07294d77] h-full flex items-center">
          <div className="w-11/12 mx-auto">
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl pb-3">
              Contact Users
            </h1>
            <p className="text-white text-xl">
              Home / <span className="text-orange-500">Contact</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto">
        <h1>{contactusers.length}</h1>
      </div>
    </div>
  );
};

export default ContactUsers;
