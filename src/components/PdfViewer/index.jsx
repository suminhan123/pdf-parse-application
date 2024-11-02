import * as pdfjsLib from "pdfjs-dist";
import "./index.css";
import { usePdfTexts } from "../../hooks/usePdfTexts";

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const PdfViewer = ({ pdfFile }) => {
  const table = usePdfTexts(pdfFile);

  return (
    <div className="container">
      {table.length > 0 && (
        <>
          <h1 className="title">신 구조문 대비</h1>
          <div className="table">
            <div className="section">
              <div className="th-1">
                <h4>현행</h4>
              </div>
              <div className="th-2">
                <h4>개정안</h4>
              </div>
            </div>
            <div className="body">
              {table.map((row, idx) => (
                <div className="content" key={idx}>
                  {row.map((v, i) => (
                    <div key={i}>
                      <h5>{v}</h5>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default PdfViewer;
