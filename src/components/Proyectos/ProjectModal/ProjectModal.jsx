import React, { useState, useEffect } from "react";
import { Modal, Container, Row, Col } from "react-bootstrap";
import { X } from "lucide-react";
import "./ProjectModal.scss";

const ProjectModal = ({ show, onHide, project, className = "" }) => {
  // Estado para controlar la carga de imágenes
  const [imagesLoaded, setImagesLoaded] = useState({});
  
  // Reiniciar el estado de carga cuando cambia el proyecto o se cierra el modal
  useEffect(() => {
    if (show && project) {
      // Pre-cargar imágenes cuando se abre el modal
      if (project.carouselImages) {
        project.carouselImages.forEach((img, index) => {
          const image = new Image();
          image.src = img.src;
          image.onload = () => {
            setImagesLoaded(prev => ({
              ...prev,
              [index]: true
            }));
          };
        });
      }
    } else {
      // Resetear el estado cuando se cierra el modal
      setImagesLoaded({});
    }
  }, [show, project]);

  if (!project) return null;

  const { title, description, carouselImages } = project;

  // Comprobación de proyecto especial por su ID o imageSrc
  const isSpecialProject = project.imageSrc === "/proyecto6.png";

  // Renderizado para el proyecto especial
  if (isSpecialProject) {
    return (
      <Modal
        show={show}
        onHide={onHide}
        size="xl"
        className={`project-modal project-modal--special ${className}`}
        centered
      >
        <Modal.Body className="project-modal__body">
          <button
            onClick={onHide}
            className="project-modal__close-btn"
            aria-label="Cerrar modal"
          >
            <X size={24} className="project-modal__close-icon" />
          </button>

          <div className="project-modal__vertical-container">
            {carouselImages.map((img, index) => (
              <div key={index} className="project-modal__image-wrapper">
                <img
                  src={img.src}
                  alt={img.alt || `Vista del proyecto ${index + 1}`}
                  className="project-modal__image project-modal__image--vertical"
                  loading="lazy"
                  onLoad={() => {
                    setImagesLoaded(prev => ({
                      ...prev,
                      [index]: true
                    }));
                  }}
                />
              </div>
            ))}
          </div>

          <div className="project-modal__info">
            <p className="project-modal__description">{description}</p>
          </div>
        </Modal.Body>
      </Modal>
    );
  }

  // Función para determinar la distribución de imágenes basada en la cantidad
  const getImageLayout = () => {
    const count = carouselImages.length;
    const layoutClasses = {
      2: "project-modal__col project-modal__col--half",
      3: "project-modal__col project-modal__col--third",
      4: "project-modal__col project-modal__col--half",
      default: "project-modal__col project-modal__col--full",
    };

    const colClass = layoutClasses[count] || layoutClasses.default;

    return carouselImages.map((img, index) => (
      <Col
        key={index}
        xs={12}
        md={count === 3 ? 4 : count <= 4 ? 6 : 12}
        className={colClass}
      >
        <img
          src={img.src}
          alt={img.alt || `Vista del proyecto ${index + 1}`}
          className="project-modal__image"
          loading="lazy"
          onLoad={() => {
            setImagesLoaded(prev => ({
              ...prev,
              [index]: true
            }));
          }}
        />
      </Col>
    ));
  };

  // Renderizado para todos los demás proyectos
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="xl"
      className={`project-modal ${className}`}
      centered
    >
      <Modal.Body className="project-modal__body">
        <button
          onClick={onHide}
          className="project-modal__close-btn"
          aria-label="Cerrar modal"
        >
          <X size={24} className="project-modal__close-icon" />
        </button>

        <Container fluid className="project-modal__grid">
          <Row className="project-modal__row">{getImageLayout()}</Row>
        </Container>

        <div className="project-modal__info">
          <p className="project-modal__description">{description}</p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProjectModal;