import { useState } from "react";
import Dashboard from "./DashboardGraph";

import controlPNG from "../../../assets/DashboardIcons/control.png";
import logoPNG from "../../../assets/DashboardIcons/logo.png";
import DashboardHeader from "./DashBoardHeader";
import { Link } from "react-router-dom";
import adminEndpoints from "../../../constraints/endpoints/adminEndpoints";

const DashboardSidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
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
            Genius Grid Admin
          </h1>
        </div>
        <ul
          className={`transition-all ${
            !open ? "opacity-0 scale-0" : "opacity-100 scale-100"
          } origin-left duration-200 transform`}
        >
          <li>
            <Link
              to="/admin"
              className="block px-4 mt-10 py-2 text-gray-800 rounded-md hover:bg-[#00df9a] hover:text-black cursor-pointer"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to={adminEndpoints.dashboard}
              className="block px-4 py-2 text-gray-800 rounded-md hover:bg-[#00df9a] hover:text-black cursor-pointer"
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              to={adminEndpoints.dashboard}
              className="block px-4 py-2 text-gray-800 rounded-md hover:bg-[#00df9a] hover:text-black cursor-pointer"
            >
              Instructors
            </Link>
          </li>
          <li>
            <Link
              to={adminEndpoints.dashboard}
              className="block px-4 py-2 text-gray-800 rounded-md hover:bg-[#00df9a] hover:text-black cursor-pointer"
            >
              Course Analysis
            </Link>
          </li>
          <li>
            <Link
              to={adminEndpoints.dashboard}
              className="block px-4 py-2 text-gray-800 rounded-md hover:bg-[#00df9a] hover:text-black cursor-pointer"
            >
              User Analysis
            </Link>
          </li>
          <li>
            <Link
              to={adminEndpoints.dashboard}
              className="block px-4 py-2 text-gray-800 rounded-md hover:bg-[#00df9a] hover:text-black cursor-pointer"
            >
              Order Analysis
            </Link>
          </li>
          <li>
            <Link
              to={adminEndpoints.dashboard}
              className="block px-4 py-2 text-gray-800 rounded-md hover:bg-[#00df9a] hover:text-black cursor-pointer"
            >
              Categories
            </Link>
          </li>
          <li>
            <Link
              to={adminEndpoints.dashboard}
              className="block px-4 py-2 text-gray-800 rounded-md hover:bg-[#00df9a] hover:text-black cursor-pointer"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              to={adminEndpoints.dashboard}
              className="block px-4 py-2 text-gray-800 rounded-md hover:bg-[#00df9a] hover:text-black cursor-pointer"
            >
              Invoices
            </Link>
          </li>
        </ul>
      </div>
      <div className="h-screen flex-1 ">
        <div></div>
        <DashboardHeader />
        <Dashboard />
      </div>
    </div>
  );
};
export default DashboardSidebar;
