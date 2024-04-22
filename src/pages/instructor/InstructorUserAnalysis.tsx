import DashboardHeader from "../../components/Instructor/layout/DashBoardHeader";
import DashboardSidebar from "../../components/Instructor/layout/DashboardSidebar";

import DashboardUserAnalysis from "../../components/Instructor/Dashboard/DashboardUserAnalysis";

function InstructorUserAnalysis() {



  return (
    <div className="flex">
      <DashboardSidebar />
      <div className="h-screen flex-1">
        <DashboardHeader />
        <DashboardUserAnalysis />
      </div>
    </div>
  );
}

export default InstructorUserAnalysis;
