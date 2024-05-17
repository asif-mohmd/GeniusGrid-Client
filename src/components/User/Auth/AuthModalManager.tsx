import { useState } from "react";
import SignupModal from "./SignupModal";
import LoginModal from "./LoginModal";

const AuthModalManager = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleShowSignup = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  const handleShowLogin = () => {
    setShowSignup(false);
    setShowLogin(true);
  };

  const handleClose = () => {
    setShowSignup(false);
    setShowLogin(false);
  };

  return (
    <>
      <button onClick={handleShowSignup}>Sign Up</button>
      <button onClick={handleShowLogin}>Login</button>

      {showSignup && (
        <SignupModal onClose={handleClose} onShowLogin={handleShowLogin} />
      )}
      {showLogin && (
        <LoginModal onClose={handleClose} onShowSignup={handleShowSignup} />
      )}
    </>
  );
};

export default AuthModalManager;
