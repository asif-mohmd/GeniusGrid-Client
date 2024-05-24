import { ReactNode, useState, createContext, useContext } from "react";

interface IAuthContext {
    showSignup: boolean;
    showLogin: boolean;
    isLogin: boolean;
    handleShowSignup: () => void;
    handleShowLogin: () => void;
    handleClose: () => void;
    setIsLogin: (value: boolean) => void;
}

// Create the context
const AuthContext = createContext<IAuthContext>({
    showSignup: false,
    showLogin: false,
    isLogin: false,
    handleShowSignup: () => {},
    handleShowLogin: () => {},
    handleClose: () => {},
    setIsLogin: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

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
    <AuthContext.Provider
      value={{
        showSignup,
        showLogin,
        handleShowSignup,
        handleShowLogin,
        handleClose,
        isLogin,
        setIsLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);