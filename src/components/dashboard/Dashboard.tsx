import { useEffect, useMemo, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import type { AuthContextType } from "../../context/AuthContext";
import FileUpload from "./FileUpload";
import SummaryCards from "./SummaryCards";
import ChartsSection from "./ChartSection";
import EmployeeTable from "../table/Table";
import EmptyState from "./EmptyStatee";

interface EmployeeData {
  Department: string;
  Role: string;
  [key: string]: unknown;
}

const Dashboard = () => {
  const [data, setData] = useState<EmployeeData[]>([]);
  const [dept] = useState("");
  const [role] = useState("");
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
  const filteredData = useMemo(() => {
    return data.filter((d) => {
      if (dept && d.Department !== dept) return false;
      if (role && d.Role !== role) return false;
      return true;
    });
  }, [data, dept, role]);
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 md:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h1 className="text-2xl font-semibold text-gray-800">
            Employee Dashboard
          </h1>
          <FileUpload setData={setData} />
        </div>

        {data.length === 0 ? (
          <EmptyState />
        ) : (
          <>
            <SummaryCards data={filteredData} />
            <ChartsSection data={filteredData} />
            <EmployeeTable data={filteredData} />
          </>
        )}
      </div>
    </div>
  );
};
export default Dashboard;
