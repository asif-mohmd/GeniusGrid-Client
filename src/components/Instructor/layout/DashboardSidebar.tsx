import { useState } from "react";

import controlPNG from "../../../assets/DashboardIcons/control.png";
import logoPNG from "../../../assets/DashboardIcons/logo.png";
import { Link } from "react-router-dom";
import adminEndpoints from "../../../constraints/endpoints/adminEndpoints";
import { LiaFileInvoiceSolid } from "react-icons/lia";import { CiCirclePlus } from "react-icons/ci";
import { AiOutlineDashboard } from "react-icons/ai";
import { LuUsers } from "react-icons/lu";
import instructorEndpoints from "../../../constraints/endpoints/instructorEndpoints";
import { MdChecklist, MdOutlineAnalytics } from "react-icons/md";
import { TbCategory, TbUsersGroup } from "react-icons/tb";
import { FaQuora } from "react-icons/fa";
const DashboardSidebar = () => {
  const [open, setOpen] = useState(true);

  return (
   
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-white h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={controlPNG}
          className={`absolute cursor-pointer -right-3 top-11 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logoPNG}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={` text-black origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Instructor Control
          </h1>
        </div>
        <ul
  className={`transition-all ${
    !open ? "opacity-0 scale-0" : "opacity-100 scale-100"
  } origin-left duration-200 transform`}
>
  <li>
    <Link
      to="/instructor"
      className="flex items-center px-4 mt-10 py-2 text-gray-800 rounded-md hover:bg-[#00df9a] hover:text-black cursor-pointer"
    >
      <AiOutlineDashboard className="mr-2" />
      Dashboard
    </Link>
  </li>
  <li>
    <Link
      to={instructorEndpoints.users}
      className="flex items-center px-4 py-2 text-gray-800 rounded-md hover:bg-[#00df9a] hover:text-black cursor-pointer"
    >
      <LuUsers className="mr-2" />
      Users
    </Link>
  </li>

  <li>
    <Link
      to={instructorEndpoints.createCourse}
      className="flex items-center px-4 py-2 text-gray-800 rounded-md hover:bg-[#00df9a] hover:text-black cursor-pointer"
    >
      <CiCirclePlus className="mr-2" />
      Create course
    </Link>
  </li>
  <li>
    <Link
      to={instructorEndpoints.myCourses}
      className="flex items-center px-4 py-2 text-gray-800 rounded-md hover:bg-[#00df9a] hover:text-black cursor-pointer"
    >
      <MdChecklist className="mr-2" />
      My Courses
    </Link>
  </li>
  <li>
    <Link
      to={instructorEndpoints.userAnalysis}
      className="flex items-center px-4 py-2 text-gray-800 rounded-md hover:bg-[#00df9a] hover:text-black cursor-pointer"
    >
      <TbUsersGroup className="mr-2" />
      User Analysis
    </Link>
  </li>
  <li>
    <Link
      to={instructorEndpoints.orderAnalysis}
      className="flex items-center px-4 py-2 text-gray-800 rounded-md hover:bg-[#00df9a] hover:text-black cursor-pointer"
    >
      <MdOutlineAnalytics   className="mr-2" />
      Order Analysis
    </Link>
  </li>
  <li>
    <Link
      to={adminEndpoints.categories}
      className="flex items-center px-4 py-2 text-gray-800 rounded-md hover:bg-[#00df9a] hover:text-black cursor-pointer"
    >
      <TbCategory  className="mr-2" />
      Categories
    </Link>
  </li>
  <li>
    <Link
      to={adminEndpoints.faq}
      className="flex items-center px-4 py-2 text-gray-800 rounded-md hover:bg-[#00df9a] hover:text-black cursor-pointer"
    >
      <FaQuora   className="mr-2" />
      FAQ
    </Link>
  </li>
  <li>
    <Link
      to={adminEndpoints.invoices}
      className="flex items-center px-4 py-2 text-gray-800 rounded-md hover:bg-[#00df9a] hover:text-black cursor-pointer"
    >
      <LiaFileInvoiceSolid className="mr-2" />
      Invoices
    </Link>
  </li>
</ul>
      </div>

     
    
        
      
   
  );
};
export default DashboardSidebar;
