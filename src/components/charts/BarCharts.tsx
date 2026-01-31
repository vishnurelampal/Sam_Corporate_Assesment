import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function SalaryBarChart({ data }: { data: any[] }) {
  return (
    <div className="h-64 w-full">
      <p className="mb-2 text-sm font-medium text-gray-700">
        Salary by Department
      </p>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="salary" fill="#2563eb" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalaryBarChart;
