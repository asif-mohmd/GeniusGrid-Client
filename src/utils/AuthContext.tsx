import { ReactNode, useState, createContext, useContext } from "react";

interface IAuthContext {
    showSignup: boolean;
    showLogin: boolean;
    isLogin: boolean;
    showOTP: boolean;
    handleShowSignup: () => void;
    handleShowLogin: () => void;
    handleShowOTP: ()=> void;
    handleClose: () => void;
    setIsLogin: (value: boolean) => void;
}

// Create the context
const AuthContext = createContext<IAuthContext>({
    showSignup: false,
    showLogin: false,
    isLogin: false,
    showOTP: false,
    handleShowSignup: () => {},
    handleShowLogin: () => {},
    handleShowOTP: () => {},
    handleClose: () => {},
    setIsLogin: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [showOTP, setShowOTP] = useState(false);


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
    setShowOTP(false);
  };

  const handleShowOTP = () =>{
    setShowSignup(false)
    setShowOTP(true)
  }

  return (
    <AuthContext.Provider
      value={{
        showSignup,
        showLogin,
        handleShowSignup,
        handleShowLogin,
        handleShowOTP,
        handleClose,
        isLogin,
        setIsLogin,
        showOTP,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);