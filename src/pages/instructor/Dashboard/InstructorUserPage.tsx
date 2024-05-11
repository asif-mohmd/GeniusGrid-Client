import DashboardHeader from "../../../components/Instructor/layout/DashBoardHeader";
import DashboardSidebar from "../../../components/Instructor/layout/DashboardSidebar";

import DashboardUsers from "../../../components/Instructor/Dashboard/DashboardUsers";

function InstructorUserPage() {



  return (
    <div className="flex">
      <DashboardSidebar />
      <div className="h-screen flex-1">
        <DashboardHeader />
        <DashboardUsers />
      </div>
    </div>
  );
}

export default InstructorUserPage;
