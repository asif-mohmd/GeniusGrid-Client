import DashboardHeader from "../../components/Instructor/layout/DashBoardHeader";
import DashboardSidebar from "../../components/Instructor/layout/DashboardSidebar";

import DashboardTranscodeVideo from "../../components/Instructor/Dashboard/DashboardTranscodeVideo";

function InstructorTranscodeVideo() {



  return (
    <div className="flex">
      <DashboardSidebar />
      <div className="h-screen flex-1">
        <DashboardHeader />
        <DashboardTranscodeVideo />
      </div>
    </div>
  );
}

export default InstructorTranscodeVideo;
