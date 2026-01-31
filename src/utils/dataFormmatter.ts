function getSummary(data: any[]) {
  const totalEmployees = data.length;
  const totalSalary = data.reduce((s, d) => s + Number(d.Salary || 0), 0);
  const avgSalary = totalEmployees ? totalSalary / totalEmployees : 0;
  const totalLeaves = data.reduce(
    (s, d) => s + Number(d["Leave Count"] || 0),
    0
  );

  return { totalEmployees, totalSalary, avgSalary, totalLeaves };
}

function prepareChartData(data: any[]) {
  const deptMap: any = {};

  data.forEach((d) => {
    const dept = d.Department;
    if (!deptMap[dept]) {
      deptMap[dept] = { count: 0, salary: 0 };
    }
    deptMap[dept].count += 1;
    deptMap[dept].salary += Number(d.Salary || 0);
  });

  return {
    bar: Object.keys(deptMap).map((k) => ({
      name: k,
      salary: deptMap[k].salary,
    })),
    pie: Object.keys(deptMap).map((k) => ({
      name: k,
      value: deptMap[k].count,
    })),
    line: Object.keys(deptMap).map((k) => ({
      name: k,
      salary: deptMap[k].salary,
    })),
  };
}

export { getSummary, prepareChartData };
