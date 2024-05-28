import DashboardHeader from "../../components/Admin/Dashboard/DashBoardHeader";
import DashboardSidebar from "../../components/Admin/Dashboard/DashboardSidebar";
import  { DashboardGraph } from "../../components/Admin/Dashboard/DashboardGraph";

function AdminDashboard() {

  




  return (
    <div className="flex bg-[#171f3c]">
      <DashboardSidebar />
      <div className=" flex-1">
        <DashboardHeader />
        <DashboardGraph />
      </div>
    </div>
  );
}

export default AdminDashboard;
