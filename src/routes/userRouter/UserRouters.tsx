import { Route, Routes } from "react-router-dom"
import userEndpoints from "../../constraints/endpoints/userEndpoints"
import Home from "../../pages/user/UserHomePage"

import  UserProtectorRoute  from "./UserProtectorRoute"
import UserCourseDetails from "../../pages/user/UserCourseDetails"
import UserCourseListPage from "../../pages/user/UserCourseListPage"
import courseEndspoints from "../../constraints/endpoints/courseEndspoints"
import PurchasedCourse from "../../pages/user/PurchasedCourse"
// import StripeForm from "../../components/User/Course/PaymentComponents/StripeForm"
import PaymentSuccess from "../../components/User/Course/PurchaseContents/PaymentSuccess"
import ProfileLanding from "../../pages/user/UserProfile/ProfileLanding"
import UserAboutUS from "../../pages/user/UserAboutUS"
import ErrorPage from "../../utils/ErrorPage"



const UserRouters = () => {
  return (
    // i using the userEndpoints as the path here because it same as user anywhere
    // But in instructor and admin 
       <Routes>
        <Route path={userEndpoints.home} Component={Home} />
        <Route path={userEndpoints.aboutUs} Component={UserAboutUS} />
        <Route path={userEndpoints.courseDetails} Component={UserCourseDetails}  />
        <Route path={courseEndspoints.allUserCourses} Component={UserCourseListPage} />
        <Route path={userEndpoints.purchasedCoures} element={<UserProtectorRoute component={PurchasedCourse}/>} />
        <Route path={userEndpoints.checkoutSuccess} element={<UserProtectorRoute component={PaymentSuccess}/>} />
        <Route path={userEndpoints.profilePage} element={<UserProtectorRoute component={ProfileLanding}/>} />
        <Route path={userEndpoints.errorPage} Component={ErrorPage} />

       </Routes>
    
  )
}

export default UserRouters
