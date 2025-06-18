import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import "./Projects.css";

function Projects() {
  return (
    <section>
      <Container fluid className="project-section">
        <Container>
          <Row>
            <Col md={12} className="project-header">
              <h1 className="project-heading">
                My Recent <strong className="text-gradient">Works </strong>
              </h1>
              <p style={{ color: "white" }}>
                Here are a few projects I've worked on recently.
              </p>
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCards
                imgPath="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                title="E-Commerce Platform"
                description="A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration."
                ghLink="https://github.com/yourusername/ecommerce-platform"
                demoLink="https://ecommerce-demo.com"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCards
                imgPath="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                title="Task Management App"
                description="A collaborative task management application with real-time updates, team collaboration features, and progress tracking. Built with React, Socket.io, and Express."
                ghLink="https://github.com/yourusername/task-manager"
                demoLink="https://task-manager-demo.com"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCards
                imgPath="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                title="Weather Dashboard"
                description="A responsive weather dashboard that displays current weather conditions and forecasts. Integrates with multiple weather APIs and features interactive maps."
                ghLink="https://github.com/yourusername/weather-dashboard"
                demoLink="https://weather-demo.com"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCards
                imgPath="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                title="Portfolio Website"
                description="A modern, responsive portfolio website built with React and styled with custom CSS. Features smooth animations, dark mode, and mobile-first design."
                ghLink="https://github.com/yourusername/portfolio"
                demoLink="https://portfolio-demo.com"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCards
                imgPath="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                title="Blog Platform"
                description="A content management system for blogs with rich text editor, user authentication, and SEO optimization. Built with React, Node.js, and PostgreSQL."
                ghLink="https://github.com/yourusername/blog-platform"
                demoLink="https://blog-demo.com"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCards
                imgPath="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                title="Chat Application"
                description="A real-time chat application with features like private messaging, group chats, and file sharing. Built with React, Socket.io, and MongoDB."
                ghLink="https://github.com/yourusername/chat-app"
                demoLink="https://chat-demo.com"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Projects;
