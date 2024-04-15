import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { Navigate } from "react-router-dom";


interface ProtectedRouteProps {
  component: React.FC;
}

const UserProtectorRoute: React.FC<ProtectedRouteProps> = ({ component: Component }) => {
  const user = useSelector((store: RootState) => store.userAuth);
    if (user.isLogin==false) {
      return <Navigate to="/login" />;
    }
  
    return <Component/>;
  };

export default UserProtectorRoute;