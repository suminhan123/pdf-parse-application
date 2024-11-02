import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const PdfViewer = ({ pdfFile }) => {
  return (
    <div>
      <button>pdf 뷰어</button>
    </div>
  );
};
export default PdfViewer;
