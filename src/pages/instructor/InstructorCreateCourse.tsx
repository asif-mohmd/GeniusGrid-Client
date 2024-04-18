import DashboardHeader from "../../components/Instructor/layout/DashBoardHeader";
import DashboardSidebar from "../../components/Instructor/layout/DashboardSidebar";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import instructorEndpoints from "../../constraints/endpoints/instructorEndpoints";
import CreateCourse1 from "../../components/Instructor/Dashboard/CreateCourse/CreateCourse1";

function InstructorCreateCourse() {

  const navigate = useNavigate()
  const instructor = useSelector((store:RootState)=> store.instructorAuth)


  useEffect(()=>{
    if(instructor.isLogin){
      navigate(instructorEndpoints.createCourse)
    }else{
      navigate(instructorEndpoints.login)
    }
  },[instructor])


  return (
    <div className="flex">
      <DashboardSidebar />
      <div className="h-screen flex-1">
        <DashboardHeader />
        <CreateCourse1/>
      </div>
    </div>
  );
}

export default InstructorCreateCourse;
