import { useEffect } from "react";
import HomePage from "../../components/User/Home/HomePage";
import Header from "../../components/User/Layout/Header";
import { useNavigate } from "react-router";
import { useSelector} from "react-redux"
import { RootState } from '../../redux/Store';


const UserHomePage = () => {


  const user = useSelector((store: RootState) => store.userAuth);
  const navigate = useNavigate()

  useEffect(() => {
    if (!user.isLogin) {
      navigate("/login");
    }else{
      navigate("/")
    }
  }, [user]);


  return (
    <div>
      <Header/>
      <HomePage />
    </div>
  );
};

export default UserHomePage;
