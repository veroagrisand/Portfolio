import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiWindows11,
  SiUbuntu,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" href="https://www.microsoft.com/software-download/windows11">
        <SiWindows11 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" href="https://code.visualstudio.com/">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" href="https://ubuntu.com/">
        <SiUbuntu />
      </Col>
      <Col xs={4} md={2} className="tech-icons" href="https://www.postman.com">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" href="https://slack.com">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons" href="https://vercel.com">
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;
