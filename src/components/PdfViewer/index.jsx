import * as pdfjsLib from "pdfjs-dist";
import { useCallback, useEffect, useRef, useState } from "react";
import { getExtractedText } from "../../utils/getExtractedText";
import { getParseTable } from "../../utils/getParseTable";

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const PdfViewer = ({ pdfFile }) => {
  useEffect(() => {
    if (pdfFile) {
      const table = handlePdfUpload(pdfFile);
      console.log(table);
    }
  }, [pdfFile]);

  const handlePdfUpload = async (file) => {
    const fileReader = new FileReader();
    fileReader.onload = async (event) => {
      const typedarray = new Uint8Array(event.target.result);
      const loadingTask = pdfjsLib.getDocument(typedarray);

      const doc = await loadingTask.promise;
      const page = await doc.getPage(6);
    };

    fileReader.readAsArrayBuffer(file);
  };

  return <div></div>;
};
export default PdfViewer;
