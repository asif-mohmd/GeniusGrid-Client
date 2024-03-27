import DashboardHeader from "../../components/Admin/Dashboard/DashBoardHeader";
import DashboardInstructors from "../../components/Admin/Dashboard/DashboardInstructors";
import DashboardSidebar from "../../components/Admin/Dashboard/DashboardSidebar";

function AdminDashboardInstructors() {
  return (
    <div className="flex">
      <DashboardSidebar />
      <div className="h-screen flex-1">
        <DashboardHeader />
        <DashboardInstructors />
      </div>
    </div>
  );
}

export default AdminDashboardInstructors;
