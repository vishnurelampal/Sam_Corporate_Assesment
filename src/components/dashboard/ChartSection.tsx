import { prepareChartData } from "../../utils/dataFormmatter";
import SalaryBarChart from "../charts/BarCharts";
import TrendLineChart from "../charts/LineChart";
import DeptPieChart from "../charts/PieChart";

function ChartsSection({ data }: { data: any[] }) {
  const chartData = prepareChartData(data);

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="rounded-xl bg-white p-4 shadow-sm">
        <SalaryBarChart data={chartData.bar} />
      </div>

      <div className="rounded-xl bg-white p-4 shadow-sm">
        <DeptPieChart data={chartData.pie} />
      </div>

      <div className="rounded-xl bg-white p-4 shadow-sm lg:col-span-3">
        <TrendLineChart data={chartData.line} />
      </div>
    </div>
  );
}

export default ChartsSection;
