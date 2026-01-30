import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { useAuth } from "../context/AuthContext";
import type { AuthContextType } from "../context/AuthContext";
interface Props {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  const { Auth } = useAuth() as AuthContextType;

  if (!Auth) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
