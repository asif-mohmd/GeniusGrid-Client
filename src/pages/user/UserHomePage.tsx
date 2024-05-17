import Header from "../../components/User/Layout/Header";
import HomePage from "../../components/User/Home/HomePage";
import HomeCourse from "../../components/User/Course/HomeCourse";
import InstructorBanner from "../../components/User/Home/InstructorBanner";
import Footer from "../../components/User/Layout/Footer";
import AuthModalManager from "../../components/User/Auth/AuthModalManager";

const UserHomePage = () => {


  return (
    <div>
      <Header />
      <HomePage />
      <HomeCourse />
      <InstructorBanner />
      <Footer />
      <AuthModalManager/>

    </div>
  );
};

export default UserHomePage;
