import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
// import pdf from "../../Assets/../Assets/Satyam_Jaiswal_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href="#"
            target="_blank"
            style={{ maxWidth: "250px" }}
            disabled
          >
            <AiOutlineDownload />
            &nbsp;Resume Coming Soon
          </Button>
        </Row>

        <Row className="resume">
          <div style={{ textAlign: "center", padding: "50px" }}>
            <h2>Resume Section</h2>
            <p>Resume will be available soon. Please check back later!</p>
          </div>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href="#"
            target="_blank"
            style={{ maxWidth: "250px" }}
            disabled
          >
            <AiOutlineDownload />
            &nbsp;Resume Coming Soon
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
