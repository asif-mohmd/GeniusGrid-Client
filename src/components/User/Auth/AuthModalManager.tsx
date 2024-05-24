import SignupModal from "./SignupModal";
import LoginModal from "./LoginModal";
import { useAuth } from "../../../utils/AuthContext";

const AuthModalManager = () => {
  const { showSignup, showLogin, handleShowSignup, handleShowLogin, handleClose } = useAuth();

  return (
    <>
      <button onClick={handleShowSignup}>Sign Up</button>
      <button onClick={handleShowLogin}>Login</button>

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
