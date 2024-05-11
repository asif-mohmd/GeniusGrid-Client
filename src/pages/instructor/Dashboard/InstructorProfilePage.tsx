import DashboardHeader from "../../../components/Instructor/layout/DashBoardHeader";
import DashboardSidebar from "../../../components/Instructor/layout/DashboardSidebar";

import ProfiePage from "../../../components/Instructor/Dashboard/ProfiePage";

function InstructorProfilePage() {



  return (
    <div className="flex">
      <DashboardSidebar />
      <div className="h-screen flex-1">
        <DashboardHeader />
        <ProfiePage />
      </div>
    </div>
  );
}

export default InstructorProfilePage;
