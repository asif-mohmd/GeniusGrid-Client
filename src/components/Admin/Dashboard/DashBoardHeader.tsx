import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import adminEndpoints from '../../../constraints/endpoints/adminEndpoints';
import { useDispatch } from 'react-redux';
import { adminLogout } from '../../../redux/adminSlice/adminSlice';
import { GiHamburgerMenu } from 'react-icons/gi';

const DashboardHeader = () => {
  const [open,setOpen] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const showDropDown=()=>{
    setOpen(!open)
  }

  const handleClick=()=>{
     dispatch(adminLogout())
     navigate(adminEndpoints.login)
   }
 

  return (
    <div className='bg-white flex items-center h-16 w-full justify-end'>


      <ul className=' md:flex '>
      <div className='flex ' onClick={showDropDown}>
      <GiHamburgerMenu className='text-black mr-6'/>      
        {open && (
        <div className='absolute right-4 mt-2 w-44 top-11 bg-white border rounded-lg shadow-lg'>
        <div className="py-2">
          <Link to={adminEndpoints.login}  className='block px-4 py-2 text-gray-800 rounded-md hover:bg-[#00df9a] hover:text-black cursor-pointer'>Profile</Link>
          <Link to={adminEndpoints.login}  className='block px-4 py-2 text-gray-800 rounded-md hover:bg-[#00df9a] hover:text-black cursor-pointer'>Settings</Link>
          <button onClick={handleClick}  className='block px-4 py-2 text-gray-800 rounded-md hover:bg-[#00df9a] hover:text-black cursor-pointer'>Signout</button>
        </div>
      </div>
        )}
      </div>
   
      </ul>


    </div>



   
  );
};

export default DashboardHeader;
