import React from "react";
import { Card } from "react-bootstrap";
import "./ProjectCards.css";

const ProjectCards = (props) => {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold" }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div className="project-links">
          {props.ghLink && (
            <a
              href={props.ghLink}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <i className="fab fa-github"></i> View Code
            </a>
          )}
          {props.demoLink && (
            <a
              href={props.demoLink}
              target="_blank"
              rel="noreferrer"
              className="project-link demo-link"
            >
              <i className="fas fa-external-link-alt"></i> Live Demo
            </a>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCards;
