
import AuthModalManager from "../../components/User/Auth/AuthModalManager";
import CategoryListCarousel from "../../components/User/Course/CategoryListCarousel";
import CourseListPage from "../../components/User/Course/CourseListPage";
import Footer from "../../components/User/Layout/Footer";
import Header from "../../components/User/Layout/Header";



const UserCourseListPage = () => {



  return (
    <>
    <div>
      <Header/>
      <CategoryListCarousel category={"All"} setCategory={"Ni"}/>
       <CourseListPage/>
       <AuthModalManager/>

        <Footer/>
    </div>
  
    </>
  );
};

export default UserCourseListPage;
