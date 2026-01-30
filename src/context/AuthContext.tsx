import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
export type AuthContextType = {
  Auth: boolean;
  login: () => void;
  logout: () => void;
};
const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [Auth, setAuth] = useState(sessionStorage.getItem("Auth") === "true");

  const login = () => {
    sessionStorage.setItem("Auth", "true");
    setAuth(true);
  };

  const logout = () => {
    sessionStorage.removeItem("Auth");
    setAuth(false);
  };

  return (
    <AuthContext.Provider value={{ Auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
