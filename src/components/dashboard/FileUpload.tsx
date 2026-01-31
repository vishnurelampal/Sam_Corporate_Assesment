import { parseExcelFile } from "../../utils/excelParser";

function FileUpload({ setData }: { setData: (data: any[]) => void }) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    parseExcelFile(file).then((parsed) => setData(parsed));
  }

  return (
    <label className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700">
      Upload File
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
