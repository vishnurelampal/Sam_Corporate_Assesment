import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import type { AuthContextType } from "../../context/AuthContext";
const Dashboard = () => {
  const { logout } = useAuth() as AuthContextType;
  const navigate = useNavigate();

  useEffect(() => {
    const handlePopState = () => {
      logout();
      navigate("/", { replace: true });
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [logout, navigate]);

  return (
    <div className="bg-white">
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
