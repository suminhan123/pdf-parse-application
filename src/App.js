import { useCallback, useState } from "react";
import "./App.css";
import PdfUploader from "./components/PdfUploader";
import PdfViewer from "./components/PdfViewer";

function App() {
  const [pdf, setPdf] = useState();

  const handleSetPdf = useCallback((file) => {
    setPdf(file);
  }, []);

  return (
    <div className="App">
      <PdfUploader setPdfFile={handleSetPdf} />
      <PdfViewer pdfFile={pdf} />
    </div>
  );
}

export default App;
