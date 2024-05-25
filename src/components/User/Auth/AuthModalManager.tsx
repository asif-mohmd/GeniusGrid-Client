import SignupModal from "./SignupModal";
import LoginModal from "./LoginModal";
import { useAuth } from "../../../utils/AuthContext";
import OTPModal from "./OTPModal";

const AuthModalManager = () => {
  const { showSignup, showLogin, handleShowSignup, handleClose ,showOTP } = useAuth();

  return (
    <>

     {showOTP && (
            <OTPModal  onClose={handleClose} />

     )}

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
