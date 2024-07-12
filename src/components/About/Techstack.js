import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiNodejs,
  DiGit,
  DiBootstrap,
} from "react-icons/di";
import {
  
  SiMysql,
  SiAmazonaws,
  SiCodeigniter,
  SiMariadb,
  SiDocker,
} from "react-icons/si";
import { TbBrandPhp, TbBrandLaravel, TbBrandPython } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandLaravel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMariadb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCodeigniter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandPhp />
      </Col>
      
    </Row>
  );
}

export default Techstack;
