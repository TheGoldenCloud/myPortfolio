import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiGit, DiJava,DiMongodb,DiMysql} from "react-icons/di";
import { SiDotnet,SiRedux,SiDocker } from 'react-icons/si';

function Techstack() {
  return (

<Row style={{ justifyContent: "center" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql className="icons"  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet className="icons" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava className="icons" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 className="icons" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact className="icons" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs className="icons" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit className="icons" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker className="icons" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb className="icons" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux className="icons" />
      </Col>
    </Row>
    
  );
}

export default Techstack;
