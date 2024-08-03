import html2pdf from "html2pdf.js";

function SaveAsPdf() {
  const generatePDF = () => {
    const resume = document.querySelector('.resume');
    var result = html2pdf().from(resume).save();
    return result;

  }

  return (
    <div className="download-cv">
      <button onClick={generatePDF} className="download-button">
        Download
      </button>
    </div>
  )
}

export default SaveAsPdf;