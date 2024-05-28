import { useState } from "react";

import controlPNG from "../../../assets/DashboardIcons/control.png";
import logoPNG from "../../../assets/DashboardIcons/logo.png";
import { Link } from "react-router-dom";
import adminEndpoints from "../../../constraints/endpoints/adminEndpoints";
import {  faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'; import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BiBookAdd } from "react-icons/bi";
import { TbCategory } from "react-icons/tb";
import { AiOutlineDashboard } from "react-icons/ai";
import { LuUsers } from "react-icons/lu";
const DashboardSidebar = () => {
  const [open, setOpen] = useState(true);

  return (
   
      <div
        className={` ${
          open ? "w-72 " : "w-20 "
        } bg-[#171f3c]  p-5 h-screen pt-8 relative duration-300`}
      >
        <img
          src={controlPNG}
          className={`absolute cursor-pointer -right-3 top-4 w-8 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-3 items-center">
          <img
            src={logoPNG}
            className={`cursor-pointer duration-500  ${
              open && "rotate-[360deg]"
            }`}
          />
          <h3
            className={` text-white origin-left font-bold font-roboto text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Genius Grid Admin
          </h3>
        </div>
        <ul
  className={`transition-all ${
    !open ? "opacity-0 scale-0" : "opacity-100 scale-100"
  } origin-left duration-200 transform `}
>
  <li >
    <Link
      to="/admin"
      className="flex items-center px-4 mt-10 py-2 text-white rounded-md hover:bg-gray-600 hover:text-white cursor-pointer"
    >
      <AiOutlineDashboard className="mr-2 " />
      Dashboard
    </Link>
  </li>
  <li>
    <Link
      to="/admin/users"
      className="flex items-center px-4 py-2 text-white rounded-md hover:bg-gray-600 hover:text-white cursor-pointer"
    >
      <LuUsers className="mr-2" />
      Users
    </Link>
  </li>
  <li>
    <Link
      to="/admin/instructors"
      className="flex items-center px-4 py-2 text-white rounded-md hover:bg-gray-600 hover:text-white cursor-pointer"
    >
      <FontAwesomeIcon icon={faChalkboardTeacher} className="mr-2" />
      Instructors
    </Link>
  </li>
  <li>
    <Link
      to={adminEndpoints.addCategory}
      className="flex items-center px-4 py-2 text-white rounded-md hover:bg-gray-600 hover:text-white cursor-pointer"
    >
      <BiBookAdd  className="mr-2" />
      Add Category
    </Link>
  </li>
  <li>
    <Link
      to={adminEndpoints.viewCategory}
      className="flex items-center px-4 py-2 text-white rounded-md hover:bg-gray-600 hover:text-white cursor-pointer"
    >
      <TbCategory className="mr-2" />
      View Category
    </Link>
  </li>
  {/* <li>
    <Link
      to={adminEndpoints.courseAnalysis}
      className="flex items-center px-4 py-2 text-gray-800 rounded-md hover:bg-[#00df9a] hover:text-black cursor-pointer"
    >
      <FontAwesomeIcon icon={faListAlt} className="mr-2" />
      Course Analysis
    </Link>
  </li>
  <li>
    <Link
      to={adminEndpoints.userAnalysis}
      className="flex items-center px-4 py-2 text-gray-800 rounded-md hover:bg-[#00df9a] hover:text-black cursor-pointer"
    >
      <FontAwesomeIcon icon={faListAlt} className="mr-2" />
      User Analysis
    </Link>
  </li>
  <li>
    <Link
      to={adminEndpoints.orderAnalysis}
      className="flex items-center px-4 py-2 text-gray-800 rounded-md hover:bg-[#00df9a] hover:text-black cursor-pointer"
    >
      <FontAwesomeIcon icon={faListAlt} className="mr-2" />
      Order Analysis
    </Link>
  </li> */}
  
  {/* <li>
    <Link
      to={adminEndpoints.faq}
      className="flex items-center px-4 py-2 text-gray-800 rounded-md hover:bg-[#00df9a] hover:text-black cursor-pointer"
    >
      <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
      FAQ
    </Link>
  </li>
  <li>
    <Link
      to={adminEndpoints.invoices}
      className="flex items-center px-4 py-2 text-gray-800 rounded-md hover:bg-[#00df9a] hover:text-black cursor-pointer"
    >
      <FontAwesomeIcon icon={faFileInvoice} className="mr-2" />
      Invoices
    </Link>
  </li> */}
</ul>
      </div>

     
    
        
      
   
  );
};
export default DashboardSidebar;
