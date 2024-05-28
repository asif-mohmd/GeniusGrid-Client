import DashboardHeader from "../../components/Admin/Dashboard/DashBoardHeader";
import DashboardSidebar from "../../components/Admin/Dashboard/DashboardSidebar";
import DashboardUsers from "../../components/Admin/Dashboard/DashboardUsers";

function AdminDashboardUsers() {
  return (
    <div className="flex bg-[#171f3c] ">
      <DashboardSidebar />
      <div className=" flex-1 ">
        <DashboardHeader />
        <DashboardUsers />
      </div>
    </div>
  );
}

export default AdminDashboardUsers;
