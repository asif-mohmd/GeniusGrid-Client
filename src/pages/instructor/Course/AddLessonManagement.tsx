import DashboardHeader from "../../../components/Instructor/layout/DashBoardHeader";
import DashboardSidebar from "../../../components/Instructor/layout/DashboardSidebar";

import AddLessonManagement from "../../../components/Instructor/CourseSection/AddLessonComponent";

function LessonContentManage() {



  return (
    <div className="flex">
      <DashboardSidebar />
      <div className="h-screen flex-1 bg-slate-50  w-3/4">
        <DashboardHeader />
        <AddLessonManagement />
      </div>
    </div>
  );
}

export default LessonContentManage;
