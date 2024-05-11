import DashboardHeader from "../../../components/Instructor/layout/DashBoardHeader";
import DashboardSidebar from "../../../components/Instructor/layout/DashboardSidebar";

import ListCourses from "../../../components/Instructor/CourseSection/ListCourses";


function InstructorUserPage() {


  return (
    <div className="flex">
      <DashboardSidebar />
      <div className="h-screen flex-1">
        <DashboardHeader />
        <ListCourses />
      </div>
    </div>
  );
}

export default InstructorUserPage;
