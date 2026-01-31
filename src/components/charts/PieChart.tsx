import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

function DeptPieChart({ data }: { data: any[] }) {
  return (
    <div className="h-64 w-full">
      <p className="mb-2 text-sm font-medium text-gray-700">
        Employees by Department
      </p>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DeptPieChart;
