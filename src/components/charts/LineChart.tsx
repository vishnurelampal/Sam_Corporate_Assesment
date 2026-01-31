import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function TrendLineChart({ data }: { data: any[] }) {
  return (
    <div className="h-72 w-full">
      <p className="mb-2 text-sm font-medium text-gray-700">Salary Trend</p>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line dataKey="salary" stroke="#16a34a" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TrendLineChart;
