import DashboardHeader from "../../components/Instructor/layout/DashBoardHeader";
import DashboardSidebar from "../../components/Instructor/layout/DashboardSidebar";
import  { DashboardGraph } from "../../components/Instructor/Dashboard/DashboardGraph";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import instructorEndpoints from "../../constraints/endpoints/instructorEndpoints";

function InstructorDashboard() {

  const navigate = useNavigate()
  const instructor = useSelector((store:RootState)=> store.instructorAuth)


  useEffect(()=>{
    if(instructor.isLogin){
      navigate(instructorEndpoints.dashboard)
    }else{
      navigate(instructorEndpoints.login)
    }
  },[instructor])


  return (
    <div className="flex">
      <DashboardSidebar />
      <div className="h-screen flex-1">
        <DashboardHeader />
        <DashboardGraph />
      </div>
    </div>
  );
}

export default InstructorDashboard;
