import { useEffect, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import { getPdfParseTable } from "../utils/getPdfParseTable";

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export const usePdfTexts = (file) => {
  const [textTable, setTextTabe] = useState([]);
  useEffect(() => {
    if (file) {
      handlePdfUpload(file);
    }
  }, [file]);

  const handlePdfUpload = async (file) => {
    const fileReader = new FileReader();
    fileReader.onload = async (event) => {
      const loadingTask = pdfjsLib.getDocument(event.target.result);

      const doc = await loadingTask.promise;
      const page = await doc.getPage(6);
      const texts = await page.getTextContent();
      const table = getPdfParseTable(texts);
      setTextTabe(table);
    };

    fileReader.readAsArrayBuffer(file);
  };

  return textTable;
};
