import "./Contact.css";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Swal from "sweetalert2";
const Contact = () => {
  const hendelSend =event=>{
    event.preventDefault()
    const target = event.target;
    const name = target.name.value;
    const email = target.email.value;
    const phone = target.phone.value;
    const subject = target.subject.value;
    const message = target.message.value;
    const file = target.file.files[0].name;
    const userInfo = {name, email, phone, subject, message,file}
    console.log(file,userInfo);
    fetch('http://localhost:5000/users',{
      method: 'post',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Contact Information has be success',
          showConfirmButton: false,
          timer: 1500
        })
      }
      event.target.reset()
    })
  }
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
              Contact
            </h1>
            <p className="text-white text-xl">
              Home / <span className="text-orange-500">Contact</span>
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-[#edf0f2] py-10">
        <div className="w-11/12 mx-auto md:flex gap-9">
          <div className="md:w-[60%] bg-white rounded-xl shadow-lg p-10">
            <h1 className="text-2xl font-medium text-black">Contact Us</h1>
            <div className="py-[2px] bg-orange-600 w-[40px]"></div>
            <h1 className="text-6xl md:text-7xl font-bold text-black py-3">
              Keep in touch
            </h1>
            <form onSubmit={hendelSend} className="pt-5 md:pt-10">
              <div className="flex gap-10">
                <div className="form__group field">
                  <input
                    type="text"
                    className="form__field text-black"
                    placeholder="Your Name"
                    name="name"
                    required=""
                  />
                  <label htmlFor="name" className="form__label">
                    Your Name
                  </label>
                </div>
                <div className="form__group field">
                  <input
                    type="email"
                    className="form__field text-black"
                    placeholder="Email"
                    name="email"
                    required=""
                  />
                  <label htmlFor="name" className="form__label">
                    Email
                  </label>
                </div>
              </div>
              <div className="flex gap-10">
                <div className="form__group field">
                  <input
                    type="text"
                    className="form__field text-black"
                    placeholder="Your Name"
                    name="subject"
                    required=""
                  />
                  <label htmlFor="name" className="form__label">
                    Subject
                  </label>
                </div>
                <div className="form__group field">
                  <input
                    type="number"
                    className="form__field text-black"
                    placeholder="Email"
                    name="phone"
                    required=""
                  />
                  <label htmlFor="name" className="form__label">
                    Phone
                  </label>
                </div>
              </div>
              <div className="form__group field">
                <textarea
                  name="message"
                  id=""
                  cols="10"
                  rows="3"
                  placeholder="Message"
                  className="form__field text-black"
                  required=""
                ></textarea>
                <label htmlFor="name" className="form__label">
                  Message
                </label>
              </div>
              
              <div>
                  <input
                    type="file"
                    className=" text-black"
                    name="file"
                    accept="image/png"
                    required=""
                  />
                </div>
              <input type="submit" className="text-2xl font-medium py-2 px-6 border border-orange-500 hover:text-orange-600 bg-orange-600 text-white rounded-lg hover:bg-[#112e45] my-5" value="Send"/>
            </form>
          </div>
          <div className=" md:w-[40%]">
            <div className="bg-white rounded-xl shadow-lg p-10">
              <div className="flex items-center gap-4">
                <div className="p-2 border-2 border-gray-600 text-2xl rounded-[50%]">
                  <FaHome></FaHome>
                </div>
                <h1 className="text-xl text-black">
                  143 castle road 517 district, kiyev port south Canada
                </h1>
              </div>
              <div className="flex items-center gap-4 py-4">
                <div className="p-2 border-2 border-gray-600 text-2xl rounded-[50%]">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h1>+88017832-28430</h1>
                  <h1>+88018532-28430</h1>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 border-2 border-gray-600 text-2xl rounded-[50%]">
                  <AiOutlineMail />
                </div>
                <div>
                  <h1>alihasan@gmail.com</h1>
                  <h1>developeralihasan@gmail.com</h1>
                </div>
              </div>
            </div>
            <div className="mt-4 rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56135.19766062462!2d88.80781065847265!3d25.939531559085808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e359358ddd831f%3A0xfbb7a3268c4659b6!2sNilphamari!5e1!3m2!1sen!2sbd!4v1697539987238!5m2!1sen!2sbd"
                height="450"
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg w-full "
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
