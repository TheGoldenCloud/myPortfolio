import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/ja1.jpg";
import Tilt from "react-parallax-tilt";
import ExperienceCard from "../Experience/ExperienceCard";


function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Me
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ 
              
              display: "flex",
              justifyContent: "center",
              alignItems: "center", 
              overflow: "hidden", 
              paddingTop: "30px", 
              paddingBottom: "30px" }}
            
            className="about-img circular-image"
          >
            <Tilt>
            <img src={laptopImg} alt="about" className="img-fluid rounded-circle" />
            </Tilt>
          </Col>
        </Row>

        <h1 className="project-heading">
          My <strong className="blue">Experience </strong>
        </h1>

        <ExperienceCard/>

        <br/>

        <h1 className="project-heading">
          My <strong className="blue">Skillset </strong>
        </h1>

        <Techstack />

      </Container>
    </Container>
  );
}

export default About;
