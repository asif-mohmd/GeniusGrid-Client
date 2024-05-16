import React, { useState } from "react";
import Header from "../../components/User/Layout/Header";
import HomePage from "../../components/User/Home/HomePage";
import HomeCourse from "../../components/User/Course/HomeCourse";
import InstructorBanner from "../../components/User/Home/InstructorBanner";
import Footer from "../../components/User/Layout/Footer";
import Login from "../../components/User/Auth/Login"; // Import the Login component

const UserHomePage = () => {
  const [showLogin, setShowLogin] = useState(false); // State variable to manage login component visibility

  return (
    <div>
      <Header/>
      <HomePage />
      <HomeCourse/>
      <InstructorBanner/>
      <Footer/>
      {/* Conditionally render the Login component */}
      {showLogin && <Login />}
      {/* Button or trigger to toggle the visibility of the login component */}
      <button onClick={() => setShowLogin(!showLogin)}>Toggle Login</button>
    </div>
  );
};

export default UserHomePage;
