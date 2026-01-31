import { useState } from "react";
import { parseExcelFile } from "../../utils/excelParser";
import { FileUp } from "lucide-react";

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
    <label className="flex justify-between gap-2 item-ce cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700 hover:shadow">
      {loading ? "Processing..." : "Upload File"}
      <FileUp size={16} className="text-white" />
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
