import DashboardHeader from "../../../components/Instructor/layout/DashBoardHeader";
import DashboardSidebar from "../../../components/Instructor/layout/DashboardSidebar";

import EditCourse from "../../../components/Instructor/CourseSection/EditCourse";

function InstructorEditCourse() {

 


  return (
    <div className="flex">
      <DashboardSidebar />
      <div className="h-screen flex-1">
        <DashboardHeader />
        <EditCourse/>
      </div>
    </div>
  );
}

export default InstructorEditCourse;
