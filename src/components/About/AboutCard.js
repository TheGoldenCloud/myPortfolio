import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            - Hi Everyone, I am <span className="blue">Vladimir Jovanović </span>
            from <span className="blue"> Belgrade, Serbia.</span>
            Friends, family and other people describe me as
            fun and uplifting person, who is a huge team player 
            and have innovative  personality.
            <br/>
            - I graduated from the <a href="https://www.viser.edu.rs/?userLanguage=eng">School of Electrical and Computer 
            Engineering</a>, majoring in new computer technologys! My best programming skills are in javascript but i know/like
            to do classical OOP like java, c#, and know a little bit of php 
            <br />
            - Additionally, my interests are not all about programming, i do 3D Art modeling in Maya and 3DS max
            <br />
            - I do not have strict hobbies, but i enjoy multiple stuff
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
