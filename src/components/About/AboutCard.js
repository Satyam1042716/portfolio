import React from "react";
import { Card } from "react-bootstrap";
import "./AboutCard.css";

const AboutCard = () => {
  return (
    <Card className="about-card">
      <Card.Body>
        <Card.Text style={{ textAlign: "left" }}>
          <strong>Hello! I'm Jayesh Garg</strong>, a passionate Full Stack Developer with a strong foundation in modern web technologies and a drive to create innovative solutions.
          <br />
          <br />
          I specialize in building scalable web applications using React, Node.js, and cloud technologies. My journey in technology began with curiosity and has evolved into a passion for creating impactful digital solutions.
          <br />
          <br />
          With expertise in both frontend and backend development, I enjoy bringing ideas to life through clean, efficient code and user-centric design. I'm constantly learning and exploring new technologies to stay current with industry trends.
          <br />
          <br />
          When I'm not coding, you can find me contributing to open-source projects, participating in hackathons, or sharing knowledge with the developer community. I believe in the power of technology to solve real-world problems and make a positive impact.
          <br />
          <br />
          I'm always excited to take on new challenges and collaborate on interesting projects. Let's connect and build something amazing together!
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;
