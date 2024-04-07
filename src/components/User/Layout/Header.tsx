import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import userEndpoints from '../../../constraints/endpoints/userEndpoints';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../../redux/userSlices/authSlice';
import { clearUserData } from '../../../redux/userSlices/userDataSlice';
import instructorEndpoints from '../../../constraints/endpoints/instructorEndpoints';

const Header = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);
  const [open,setOpen] = useState(false)

  
const dispatch = useDispatch()
const navigate = useNavigate()
  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };
  const showDropDown=()=>{
    setOpen(!open)
  }

  const handleClick = () => {
    // Handle signout logic here
    // For example, you can clear authentication tokens, redirect user, etc.
    
    // Redirect the user to the login page after signout
    dispatch(clearUserData())
    dispatch(userLogout())
    navigate('/')
  };

  return (
    <>
    <div className='bg-white flex justify-between items-center h-24 w-100 mx-auto px-4 text-black shadow-lg pr-10'>
      {/* Logo */}
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>GeniusGrid</h1>

    <div className="flex items-center p-3 space-x-2 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500 hidden md:flex ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input className=" outline-none" type="text" placeholder="Search courses..." />
      </div>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex '>
        <li className='p-4 hover:bg-[#00df9a] rounded-xl m-1 cursor-pointer duration-300 hover:text-black'>Home</li>
        <li className='p-4 hover:bg-[#00df9a] rounded-xl m-1 cursor-pointer duration-300 hover:text-black'>Courses</li>
        <li className='p-4 hover:bg-[#00df9a] rounded-xl m-1 cursor-pointer duration-300 hover:text-black'>About</li>
        <Link  to={instructorEndpoints.register} className='p-4 hover:bg-[#00df9a] rounded-xl m-1 cursor-pointer duration-300 hover:text-black'>Instructor</Link>
        <div className='w-10' onClick={showDropDown}>
        <img className="cursor-pointer m-2 h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
        {open && (
        <div className='absolute right-4 mt-2 w-44 bg-white border rounded-lg shadow-lg'>
        <div className="py-2">
          <Link to={userEndpoints.login}  className='block px-4 py-2 text-gray-800 rounded-md hover:bg-[#00df9a] hover:text-black cursor-pointer'>Profile</Link>
          <Link to={userEndpoints.login}  className='block px-4 py-2 text-gray-800 rounded-md hover:bg-[#00df9a] hover:text-black cursor-pointer'>Settings</Link>
          <div 
      className='block px-4 py-2 text-gray-800 rounded-md hover:bg-[#00df9a] hover:text-black cursor-pointer'
      onClick={handleClick}
    >
      Signout
    </div>        </div>
      </div>
        )}
      </div>
   
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-#9ca3af bg-white ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>GeniusGrid</h1>

       
       <div className="m-3 mt-6 flex items-center p-3 space-x-2 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500  ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input className="bg-gray-100 outline-none" type="text" placeholder="Article name or keyword..." />
      </div>
    
    

        {/* Mobile Navigation Items */}
        <li className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-#f3f4f6'>Home</li>
        <li className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-#f3f4f6'>Courses</li>
        <li className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-#f3f4f6'>About</li>
        <li className='p-4 rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-#f3f4f6'>Contact</li>
      </ul>
      <hr className='bg-black'/>
    </div>

   

    </>
   
  );
};

export default Header;
