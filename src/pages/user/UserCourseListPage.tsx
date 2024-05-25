
import AuthModalManager from "../../components/User/Auth/AuthModalManager";
import CourseListPage from "../../components/User/Course/CourseListPage";
import Footer from "../../components/User/Layout/Footer";
import Header from "../../components/User/Layout/Header";



const UserCourseListPage = () => {



  return (
    <>
    <div>
      <Header/>
       <CourseListPage/>
       <AuthModalManager/>

        <Footer/>
    </div>
  
    </>
  );
};

export default UserCourseListPage;
