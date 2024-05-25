import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import userEndpoints from "../../../constraints/endpoints/userEndpoints";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkUserAuthentication, userLogout } from "../../../redux/userSlices/authSlice";
import { clearUserData } from "../../../redux/userSlices/userDataSlice";
import courseEndspoints from "../../../constraints/endpoints/courseEndspoints";
import logo from "../../../assets/logoGeniusGrid.jpg";
import { RootState } from "../../../redux/Store";
import { useAuth } from "../../../utils/AuthContext";

const Header = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleShowLogin } = useAuth();
  dispatch(checkUserAuthentication())
  const userLogin = useSelector((store: RootState) => store.userAuth);

  
  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  const handleClick = () => {
 
    dispatch(clearUserData());
    dispatch(userLogout());
    console.log("logiutt seee");
    navigate(userEndpoints.home);
  };

  return (
    <>
      <div className="items-center w-full mx-auto p-3 px-5 shadow-sm">
        <div className="grid grid-cols-3">
          <div className="col-span-1">
            <img src={logo} className="w-20" alt="" />
          </div>

          <div className="col-span-1 flex justify-center items-center font-mono">
            {/* Desktop Navigation */}
            <ul className="hidden md:flex">
              <Link
                to={userEndpoints.home}
                className="p-3 hover:font-medium font-semibold text-xl m-1 cursor-pointer hover:text-black"
              >
                Home
              </Link>
              <Link
                to={courseEndspoints.allUserCourses}
                className="p-3 hover:font-medium text-xl font-semibold m-1 cursor-pointer hover:text-black"
              >
                Courses
              </Link>
              <Link
                to={courseEndspoints.allUserCourses}
                className="p-3 hover:font-medium text-xl font-semibold m-1 cursor-pointer hover:text-black"
              >
                About
              </Link>
            </ul>
          </div>

          {userLogin.isLogin ? (
            <div className="col-span-1 flex justify-end">
              <Link to={userEndpoints.profilePage} className="w-10">
                <img
                  className="cursor-pointer m-2 h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </Link>
            </div>
          ) : (
            <div className="col-span-1 flex justify-end">
            <img
              className="cursor-pointer m-2 h-10 w-10 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Guest"
              onClick={handleShowLogin} // Show login modal on click
            />
          </div>
          )}

          {/* Mobile Navigation Icon */}
          <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-#9ca3af bg-white ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {/* Mobile Logo */}
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
            GeniusGrid
          </h1>

          {/* Mobile Navigation Items */}
          <li className="p-4 border-b rounded-xl duration-300 hover:text-black cursor-pointer ">
            Home
          </li>
          <li className="p-4 border-b k cursor-pointer ">Courses</li>
          <li className="p-4 border-b  cursor-pointer">About</li>
          <li className="p-4 rounded-xl  cursor-pointer ">Contact</li>
          <li className="p-4 rounded-xl " onClick={handleClick}>
            Signout
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
