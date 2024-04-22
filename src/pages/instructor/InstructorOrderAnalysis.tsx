import DashboardOrderAnalysis from "../../components/Instructor/Dashboard/DashboardOrderAnalysis";
import DashboardHeader from "../../components/Instructor/layout/DashBoardHeader";
import DashboardSidebar from "../../components/Instructor/layout/DashboardSidebar";


function InstructorOrderAnalysis() {



  return (
    <div className="flex">
      <DashboardSidebar />
      <div className="h-screen flex-1">
        <DashboardHeader />
        
        <DashboardOrderAnalysis />
      </div>
    </div>
  );
}

export default InstructorOrderAnalysis;
