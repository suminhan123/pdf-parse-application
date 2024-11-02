import * as pdfjsLib from "pdfjs-dist";

import { usePdfTexts } from "../../hooks/usePdfTexts";

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const PdfViewer = ({ pdfFile }) => {
  const table = usePdfTexts(pdfFile);

  return <div></div>;
};
export default PdfViewer;
