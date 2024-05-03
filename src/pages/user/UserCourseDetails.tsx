import CourseDetailsPage from '../../components/User/Course/CourseDetailsPage';
import VideoPlayer from '../../components/User/Course/VideoPlayer';
import Header from '../../components/User/Layout/Header';

function UserCourseDetails() {
  return (
    <div>
      <Header />
      <div className="flex bg-gray-50">
        <div className="w-1/2 p-6 bg-gray-50">
          <VideoPlayer/>
        </div>
        <div className="w-1/2 p-6 ">
          <CourseDetailsPage/>
        </div>
      </div>
    </div>
  );
}

export default UserCourseDetails;
