import DashboardHeader from "../../components/Instructor/layout/DashBoardHeader";
import DashboardSidebar from "../../components/Instructor/layout/DashboardSidebar";

import CreateCourse1 from "../../components/Instructor/Dashboard/courseSection/CreateCourse";

function InstructorCreateCourse() {


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
