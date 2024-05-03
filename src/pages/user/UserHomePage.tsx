
import HomeCourse from "../../components/User/Course/HomeCourse";
import HomePage from "../../components/User/Home/HomePage";
import InstructorBanner from "../../components/User/Home/InstructorBanner";
import Footer from "../../components/User/Layout/Footer";
import Header from "../../components/User/Layout/Header";



const UserHomePage = () => {



  return (
    <div>
      <Header/>
      <HomePage />
      <HomeCourse/>
      <InstructorBanner/>
      <Footer/>
    </div>
  );
};

export default UserHomePage;
