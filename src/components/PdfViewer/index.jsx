import * as pdfjsLib from "pdfjs-dist";

import { usePdfTexts } from "../../hooks/usePdfTexts";

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const PdfViewer = ({ pdfFile }) => {
  const table = usePdfTexts(pdfFile);

  return (
    <>
      {table.length > 0 && (
        <table>
          <caption>신 구조문 대비</caption>
          <thead>
            <tr>
              <th>현행</th>
              <th>개정안</th>
            </tr>
          </thead>
          <tbody>
            {table.map((row, idx) => (
              <tr key={idx}>
                {row.map((v, i) => (
                  <td key={i}>{v}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
export default PdfViewer;
