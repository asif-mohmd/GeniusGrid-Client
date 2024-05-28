import DashboardHeader from "../../components/Admin/Dashboard/DashBoardHeader";
import DashboardInstructors from "../../components/Admin/Dashboard/DashboardInstructors";
import DashboardSidebar from "../../components/Admin/Dashboard/DashboardSidebar";

function AdminDashboardInstructors() {
  return (
    <div className="flex bg-[#171f3c]">
      <DashboardSidebar />
      <div className=" flex-1">
        <DashboardHeader />
        <DashboardInstructors />
      </div>
    </div>
  );
}

export default AdminDashboardInstructors;
