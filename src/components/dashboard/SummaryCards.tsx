import { getSummary } from "../../utils/dataFormmatter";

function SummaryCards({ data }: { data: any[] }) {
  const summary = getSummary(data);

  const cards = [
    { label: "Employees", value: summary.totalEmployees },
    { label: "Total Salary", value: summary.totalSalary },
    { label: "Average Salary", value: Math.round(summary.avgSalary) },
    { label: "Total Leaves", value: summary.totalLeaves },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {cards.map((card) => (
        <div key={card.label} className="rounded-xl bg-white p-4 shadow-sm">
          <p className="text-sm text-gray-500">{card.label}</p>
          <p className="mt-2 text-xl font-semibold text-gray-800">
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;
