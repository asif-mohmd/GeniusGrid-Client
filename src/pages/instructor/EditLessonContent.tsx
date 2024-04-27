import DashboardHeader from "../../components/Instructor/layout/DashBoardHeader";
import DashboardSidebar from "../../components/Instructor/layout/DashboardSidebar";

import EditLessonContentManagement from "../../components/Instructor/Dashboard/courseSection/EditLessonContentManagement";

function LessonContentManage() {



  return (
    <div className="flex">
      <DashboardSidebar />
      <div className="h-screen flex-1 bg-slate-50">
        <DashboardHeader />
        <EditLessonContentManagement />
      </div>
    </div>
  );
}

export default LessonContentManage;
