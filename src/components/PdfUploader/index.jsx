import "./index.css";

const PdfUploader = ({ setPdfFile }) => {
  const onChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
    } else {
      alert("PDF 파일만 업로드 가능합니다.");
    }
  };
  return (
    <input
      className="pdfUploader"
      type="file"
      onChange={onChange}
      accept=".pdf"
    />
  );
};
export default PdfUploader;
