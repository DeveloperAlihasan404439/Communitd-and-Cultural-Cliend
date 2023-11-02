import {useState } from "react";
import { GoogleAuthProvider, getAuth, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase";
import Swal from "sweetalert2";
import "./Login.css";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../companent/Hooks/useAuth";
const Login = () => {
  // const [passwordOpen, setPasswordOpen] = useState(true);
  const [error, setError] = useState("");
  const { createUser, loginUser, logOutUser, googleUser,githubUser } =useAuth();
  // const { createUser, loginUser, logOutUser, googleUser,githubUser } =
  //   useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GoogleAuthProvider()
  const auth = getAuth(app);
  const location = useLocation()
  const navigate = useNavigate()

  const hendlSignUp = (event) => {
    event.preventDefault();
    const target = event.target;
    const name = target.name.value;
    const email = target.email.value;
    const photo = target.photo.value;
    const password = target.password.value;
    const confirm = target.confirm.value;
    const user = { name, email, photo, password, confirm };
    setError("");

    /* if (!(password === confirm)) {
      return setError(" Password and Confirm Password Do Not Match.");
    } else if (password.length > 6) {
      return setError("Password must be at least 6 characters in length.");
    } else if (!/[!@#$%^&*]/.test(password)) {
      return setError("Password must be one Special Characters");
    }  *///milon@gmail.com
    createUser(email, password)
      .then((result) => {
        updateProfile(auth.currentUser, {
          displayName: name, photoURL: photo
        }).then((result) => {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Success the sing up",
            showConfirmButton: false,
            timer: 1500,
          })
          logOutUser();
        }).catch((error) => {
          // An error occurred
          setError(error.message)
        });
        event.target.reset();
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const hendelLogin = (event) => {
    event.preventDefault();
    const target = event.target;
    const email = target.em.value;
    const password = target.password.value;
    loginUser(email, password)
      .then((result) => {
        const email = result.user.email;
        /* axios.post('http://localhost:5000/jwt',{email}, {withCredentials: true})
        .then(res => console.log(res.data))
        .catch(error => console.log(error.message)) */
        navigate(location?.state? location?.state : '/')
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Success the  Log In",
          showConfirmButton: false,
          timer: 1500,
        });
        event.target.reset();
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const hendelGithub =()=>{
    githubUser(githubProvider)
    .then(() =>{
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Success the  Log In",
        showConfirmButton: false,
        timer: 1500,
      });
    })
    .catch(error =>{
      console.log(error.message);
    })
    console.log('object');
  }
  const hendelGoogle = () => {
    googleUser(googleProvider)
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Success the  Log In",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="w-11/12 mx-auto h-[90vh] flex justify-center items-center">
      <div className="wrapper">
        <div className="card-switch">
          <label className="switch">
            <input type="checkbox" className="toggle" />
            <span className="slider"></span>
            <span className="card-side"></span>
            <div className="flip-card__inner">
              <div className="flip-card__front">
                <div className="title">Log in</div>
                <form onSubmit={hendelLogin} className="flip-card__form">
                  <input
                    className="flip-card__input"
                    name="em"
                    placeholder="Email"
                    type="email"
                  />
                  <input
                    className="flip-card__input"
                    name="password"
                    placeholder="Password"
                    type="password"
                  />
                  <input
                    className="flip-card__btn"
                    type="submit"
                    value="Login"
                  />
                  <div className="flex gap-4">
                    <button onClick={hendelGoogle} className="google__btn">
                      Google
                    </button>
                    <button onClick={hendelGithub} className="google__btn">
                      Github
                    </button>
                  </div>
                </form>
              </div>
              <div className="flip-card__back">
                <div className="title">Sign up</div>
                <form
                  onSubmit={hendlSignUp}
                  className="flip-card__form"
                  action=""
                >
                  <input
                    className="flip-card__input bg-transparent"
                    placeholder="Name"
                    type="text"
                    name="name"
                  />
                  <input
                    className="flip-card__input bg-transparent"
                    name="email"
                    placeholder="Email"
                    type="email"
                  />
                  <input
                    className="flip-card__input bg-transparent"
                    name="photo"
                    placeholder="photo"
                    type="photo"
                  />
                  <div className="relative">
                    <input
                      className="flip-card__input bg-transparent"
                      name="password"
                      placeholder="Password"
                      type="password"
                    />
                    {/* <i onClick={()=>setPasswordOpen(!passwordOpen)} className="absolute top-[20%] right-2 text-2xl">{
                      passwordOpen?<FaEye/>:<FaEyeSlash/>
                    }</i> */}
                  </div>
                  <div className="relative">
                    <input
                      className="flip-card__input bg-transparent"
                      name="confirm"
                      placeholder="confirm"
                      type="password"
                    />
                    {/* <i onClick={()=>setContriemOpen(!confriemOpen)} className="absolute top-[20%] right-2 text-2xl">{
                      confriemOpen?<FaEye/>:<FaEyeSlash/>
                    }</i> */}
                  </div>
                  {error ? <p className="text-red-600">{error}</p> : ""}
                  <input
                    className="flip-card__btn"
                    type="submit"
                    value="Sing Up"
                  />
                </form>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Login;
