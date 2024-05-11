import DashboardHeader from "../../../components/Instructor/layout/DashBoardHeader";
import DashboardSidebar from "../../../components/Instructor/layout/DashboardSidebar";
import  { DashboardGraph } from "../../../components/Instructor/Dashboard/DashboardGraph";


function InstructorDashboard() {



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
