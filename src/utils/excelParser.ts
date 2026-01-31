import * as XLSX from "xlsx";

function parseExcelFile(file: File): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function (e) {
      const binary = e.target?.result;
      if (!binary) {
        reject([]);
        return;
      }

      const workbook = XLSX.read(binary, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(sheet);
      resolve(data);
    };

    reader.onerror = function () {
      reject([]);
    };

    reader.readAsBinaryString(file);
  });
}

export { parseExcelFile };
