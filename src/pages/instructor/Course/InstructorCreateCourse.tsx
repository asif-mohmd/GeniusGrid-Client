import DashboardHeader from "../../../components/Instructor/layout/DashBoardHeader";
import DashboardSidebar from "../../../components/Instructor/layout/DashboardSidebar";

import CreateCourse from "../../../components/Instructor/CourseSection/CreateCourse";

function InstructorCreateCourse() {

 
  return (
    <div className="flex">
      <DashboardSidebar />
      <div className="h-screen flex-1">
        <DashboardHeader />
        <CreateCourse/>
      </div>
    </div>
  );
}

export default InstructorCreateCourse;
