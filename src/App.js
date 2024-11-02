import { useCallback, useState } from "react";
import "./App.css";
import PdfUploader from "./components/PdfUploader";

function App() {
  const [pdf, setPdf] = useState();

  const handleSetPdf = useCallback((file) => {
    setPdf(file);
  }, []);

  return (
    <div className="App">
      메인페이지
      <PdfUploader setPdfFile={handleSetPdf} />
    </div>
  );
}

export default App;
