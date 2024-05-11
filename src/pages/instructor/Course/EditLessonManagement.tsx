import DashboardHeader from "../../../components/Instructor/layout/DashBoardHeader";
import DashboardSidebar from "../../../components/Instructor/layout/DashboardSidebar";

import EditLessonComponent from "../../../components/Instructor/CourseSection/EditLessonComponent";

function EditLessonManagement() {

  return (
    <div className="flex">
      <DashboardSidebar />
      <div className="h-screen flex-1 bg-slate-50 w-3/4">
        <DashboardHeader />
        <EditLessonComponent />
      </div>
    </div>
  );
}

export default EditLessonManagement;
