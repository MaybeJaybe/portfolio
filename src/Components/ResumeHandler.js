import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Document, Page } from "react-pdf";
import './ResumeHandler.css';

function ResumeHandler(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const { pdf } = props;

  return (
    <div className="ResumeHandler">
      <Document
        className="Document"
        file={pdf}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div className="page-nav">
        <p className="page-directory">
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <button classname="prev" 
          type="button" 
          disabled={pageNumber <= 1} 
          onClick={previousPage}
        >
          Previous
        </button>
        <button className="next"
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button> <br/> <br/>
        <Link to="/central-hub" className="back-link">Back</Link>
      </div>
    </div>
  );
}
export default ResumeHandler