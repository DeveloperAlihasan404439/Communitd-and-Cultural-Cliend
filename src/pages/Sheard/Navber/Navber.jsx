import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { MdMenuBook } from "react-icons/md";
import { BiSolidFoodMenu } from "react-icons/bi";
import { useContext, useState } from "react";
import { FiCornerRightDown } from 'react-icons/fi';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import "./Navber.css";
import { AuthContext } from "../../AuthProvider/AuthProviderContext/AuthProviderContext";
const Navber = () => {
  const [open, setOpen] = useState(true);
  const { user, logOutUser } = useContext(AuthContext);
  return (
    <div className="bg-[#112e45] text-white fixed z-30 w-full">
      <div className="navbar w-11/12 mx-auto">
        <div className="w-[80%] md:w-[70%] flex md:gap-4 justify-between md:justify-start ">
          <div className="drawer lg:hidden">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label onClick={() => setOpen(!open)} htmlFor="my-drawer">
                {open ? (
                  <MdMenuBook className="text-3xl" />
                ) : (
                  <BiSolidFoodMenu className="text-3xl" />
                )}
              </label>
            </div>
            <div className="drawer-side mt-16">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu pl-8 p-4 w-[70%] min-h-full text-lg md:text-xl bg-[#112e45] text-white">
                <NavLink className="py-1 lg:px-4 hover:text-black">
                  HOME
                </NavLink>
                <NavLink className="py-1 lg:px-4 hover:text-black">
                  Pages
                </NavLink>
                <NavLink className="py-1 lg:px-4 hover:text-black">
                  Courses
                </NavLink>
                <NavLink className="py-1 lg:px-4 hover:text-black">
                  Events
                </NavLink>
                <NavLink className="py-1 lg:px-4 hover:text-black">
                  Teachers
                </NavLink>
                <NavLink className="py-1 lg:px-4 hover:text-black">
                  Contact
                </NavLink>
              </ul>
            </div>
          </div>
          <img src={logo} alt="" className="w-[100px] lg:w-[150px]" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-1 uppercase text-2xl ">
            <NavLink className="py-1 lg:px-4 hover:text-orange-500">
              HOME
            </NavLink>
            <li className="py-1 lg:px-4 hover:text-orange-500 dopdown flex items-center gap-1">
              Pages <span className="mt-2"><FiCornerRightDown/></span>
              <ul className="dopdown-manu w-[250px] flex flex-col py-3 rounded-b-xl">
                <NavLink className="text-black py-1 hover:bg-black hover:text-white pl-3">
                  About Us
                </NavLink>
                <NavLink className="text-black py-1 hover:bg-black hover:text-white pl-3">
                  Gallery
                </NavLink>
                <NavLink className="text-black py-1 hover:bg-black hover:text-white pl-3">
                  Previaoy
                </NavLink>
              </ul>
            </li>
            <NavLink to='/coures' className="py-1 lg:px-4 hover:text-orange-500">
            Courses
            </NavLink>
            <NavLink className="py-1 lg:px-4 hover:text-orange-500">
              Events
            </NavLink>
            <NavLink className="py-1 lg:px-4 hover:text-orange-500">
              Teachers
            </NavLink>
            <li className="py-1 lg:px-4 hover:text-orange-500 dopdown flex items-center gap-1">
              Contact<span className="mt-2"><FiCornerRightDown/></span>
              <ul className="dopdown-manu w-[250px] flex flex-col py-3 rounded-b-xl">
                <NavLink to = "/contact" className="text-black py-1 hover:bg-black hover:text-white pl-3">
                Contact
                </NavLink>
                <NavLink to="/contact-users" className="text-black py-1 hover:bg-black hover:text-white pl-3">
                Contact Users
                </NavLink>
              </ul>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Menu>
            <MenuButton>
              {
                user?<img
                src={user?.photoURL}
                alt=""
                className="rounded-[50%] w-[50px] h-[45px] p-2 border-2 border-white"
              />:
              <img
                src="https://i.ibb.co/zZx94Sz/user.jpg"
                alt=""
                className="rounded-[50%] w-[50px]"
              />
              }
              
            </MenuButton>
            {user ? (
              <MenuList className=" mr-6">
                <div className=" w-full bg-[#112e45] text-white p-3 rounded-b-lg">
                  <MenuItem>{user?.displayName}</MenuItem>
                  <MenuItem>{user?.email}</MenuItem>
                  <MenuDivider className="my-2" />
                  <MenuItem onClick={logOutUser}>Log Out</MenuItem>
                </div>
              </MenuList>
            ) : (
              <MenuList className="mr-8">
                <div className=" w-[200px] bg-[#112e45] text-white p-3 rounded-b-lg">
                  <MenuDivider className="my-2" />
                  <MenuItem>Sing Up</MenuItem>
                  <MenuItem>
                    <Link to="/login">Login</Link>
                  </MenuItem>
                </div>
              </MenuList>
            )}
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navber;
