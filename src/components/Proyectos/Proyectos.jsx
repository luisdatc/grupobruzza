import React, { useState, useMemo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "./Card/Card";
import ProjectModal from "./ProjectModal/ProjectModal";
import { projects } from "./data/projects";
import "./Proyectos.scss";

const Proyectos = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClose = () => setShowModal(false);
  const handleShow = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  // Optimización de la división de proyectos usando useMemo
  const projectGroups = useMemo(() => {
    // Dividir los proyectos en grupos de 3 para mejor mantenibilidad
    const numberOfGroups = Math.ceil(projects.length / 3);
    const groups = [];

    for (let i = 0; i < numberOfGroups; i++) {
      groups.push(projects.slice(i * 3, (i + 1) * 3));
    }

    return groups;
  }, []);

  return (
    <section id="proyectos" className="proyectos">
      <Container fluid className="proyectos__container">
        {projectGroups.map((group, groupIndex) => (
          <Row
            key={`group-${groupIndex}`}
            className={`proyectos__row ${
              groupIndex > 0 ? "proyectos__row--spaced" : ""
            }`}
          >
            {group.map((project, index) => (
              <Col
                key={`project-${groupIndex}-${index}`}
                xs={12}
                sm={12}
                md={4}
                lg={4}
                xl={4}
                className="proyectos__column"
              >
                <div className="proyectos__card-wrapper">
                  <Card
                    imageSrc={project.imageSrc}
                    title={project.title}
                    description={project.description}
                    onClick={() => handleShow(project)}
                    aria-haspopup="dialog"
                    className="proyectos__card"
                  />
                </div>
              </Col>
            ))}
          </Row>
        ))}
      </Container>

      <ProjectModal
        show={showModal}
        onHide={handleClose}
        project={selectedProject}
        aria-modal="true"
        aria-label="Detalles del proyecto"
        className="proyectos__modal"
      />
    </section>
  );
};

export default Proyectos;
