import { useState } from "react";
import { parseExcelFile } from "../../utils/excelParser";

interface EmployeeData {
  Department: string;
  Role: string;
  [key: string]: unknown;
}
function FileUpload({ setData }: { setData: (data: EmployeeData[]) => void }) {
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    parseExcelFile(file).then((parsed) => {
      setData(parsed);
      setLoading(false);
    });
  }

  return (
    <label className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700">
      {loading ? "Processing..." : "Upload File"}
      <input
        type="file"
        accept=".xlsx,.csv"
        className="hidden"
        onChange={handleChange}
      />
    </label>
  );
}

export default FileUpload;
