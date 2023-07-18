import React from "react";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from '@react-pdf-viewer/core';
import pdf from "../../assets/archives/service_pdf.pdf"
function DocumentPdf() {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <Viewer fileUrl={pdf} />
    </Worker>
  );
}

export default DocumentPdf;
