function Filters({
  departments,
  roles,
  selectedDept,
  selectedRole,
  onDeptChange,
  onRoleChange,
}: {
  departments: string[];
  roles: string[];
  selectedDept: string;
  selectedRole: string;
  onDeptChange: (v: string) => void;
  onRoleChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-3 md:flex-row">
      <select
        value={selectedDept}
        onChange={(e) => onDeptChange(e.target.value)}
        className="rounded-lg border px-3 py-2 text-sm"
      >
        <option value="">All Departments</option>
        {departments.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>

      <select
        value={selectedRole}
        onChange={(e) => onRoleChange(e.target.value)}
        className="rounded-lg border px-3 py-2 text-sm"
      >
        <option value="">All Roles</option>
        {roles.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filters;
