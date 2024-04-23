import DashboardHeader from "../../components/Instructor/layout/DashBoardHeader";
import DashboardSidebar from "../../components/Instructor/layout/DashboardSidebar";

import LessonContentManagement from "../../components/Instructor/Dashboard/courseSection/LessonContentManagement";

function LessonContentManage() {



  return (
    <div className="flex">
      <DashboardSidebar />
      <div className="h-screen flex-1 bg-slate-50">
        <DashboardHeader />
        <LessonContentManagement />
      </div>
    </div>
  );
}

export default LessonContentManage;
