import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { Navigate } from "react-router-dom";
import { ProtectedRouteProps } from "../../interfaces/ICommonInterface";
import adminEndpoints from "../../constraints/endpoints/adminEndpoints";
import { checkAdminAuthentication } from "../../redux/adminSlice/adminSlice";

const AdminProtectorRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
}) => {
  const dispatch = useDispatch();
  dispatch(checkAdminAuthentication());
  const admin = useSelector((store: RootState) => store.adminAuth);
  if (admin.isLogin == false) {
    return <Navigate to={adminEndpoints.login} />;
  }
  return <Component />;
};

export default AdminProtectorRoute;
