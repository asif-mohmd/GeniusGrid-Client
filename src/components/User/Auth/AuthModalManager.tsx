import SignupModal from "./SignupModal";
import LoginModal from "./LoginModal";
import { useAuth } from "../../../utils/AuthContext";

const AuthModalManager = () => {
  const { showSignup, showLogin, handleShowSignup, handleClose } = useAuth();

  return (
    <>


      {showSignup && (
        <SignupModal onClose={handleClose}  />
      )}
      {showLogin && (
        <LoginModal onClose={handleClose} onShowSignup={handleShowSignup} />
      )}
    </>
  );
};

export default AuthModalManager;
