import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { Navigate } from "react-router-dom";
import { ProtectedRouteProps } from "../../interfaces/ICommonInterface";


const UserProtectorRoute: React.FC<ProtectedRouteProps> = ({ component: Component }) => {

  // const { handleShowLogin } = useAuth();
  console.log("i ma hhererere")
  const user = useSelector((store: RootState) => store.userAuth);
    if(user.isLogin==false) {
      return <Navigate to="/login" />;
    }
  
    return <Component/>;
  };

export default UserProtectorRoute;