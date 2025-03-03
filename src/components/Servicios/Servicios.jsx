import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Servicios.scss";

/**
 * Componente que muestra la sección de servicios ofrecidos
 */
const Servicios = () => {
  // Datos de las imágenes del grid
  const gridImages = [
    { id: 1, src: "/servicios1.png", alt: "Mantenimiento de edificios" },
    { id: 2, src: "/servicios2.png", alt: "Construcción y obra" },
    { id: 3, src: "/servicios3.png", alt: "Facility Management" },
    { id: 4, src: "/servicios4.png", alt: "Optimización de espacios" },
    { id: 5, src: "/servicios5.png", alt: "Gestión técnica" },
    { id: 6, src: "/servicios6.png", alt: "Soluciones integrales" },
  ];

  // Datos de las tarjetas de servicios
  const serviceCards = [
    {
      id: "construccion",
      title: "Construcción y Obra",
      description:
        "Realizamos una evaluación detallada entendiendo a las necesidades únicas de cada cliente. Diseñamos planes estratégicos que mejoran la eficiencia y sostenibilidad de cada espacio.",
    },
    {
      id: "facility",
      title: "Facility Manager Edificio",
      description:
        "Implementamos herramientas tecnológicas que optimizan la gestión de mantenimiento de edificios, y utilizamos sistemas de monitoreo, digitalización de procesos y plataformas interactivas que facilitan la comunicación entre los usuarios.",
    },
    {
      id: "mantenimiento",
      title: "Mantenimiento integral edificio",
      description:
        "Nos encargamos del mantenimiento preventivo y correctivo en las instalaciones. También abordamos problemas estructurales y funcionales, garantizando espacios seguros y en óptimas condiciones.",
    },
  ];

  return (
    <section className="servicios" id="servicios">
      <Container fluid className="p-0">
        {/* Primera fila: Texto y Grid de imágenes */}
        <Row className="servicios__first-row gx-0">
          {/* Columna de texto */}
          <Col xs={12} md={12} lg={6} className="servicios__text-column">
            <div className="servicios__text-content">
              <h2 className="servicios__title">
                Soluciones innovadoras para espacios eficientes
              </h2>
              <p className="servicios__description">
                Sabemos que una buena gestión edilicia va más allá de las
                reparaciones. Por eso, ofrecemos soluciones completas para
                construir, mantener y optimizar cada espacio, asegurando su
                funcionalidad y durabilidad a largo plazo.
              </p>
              <button
                className="servicios__cta-button"
                aria-label="Solicitar un diagnóstico personalizado"
              >
                Solicita un Diagnóstico
              </button>
            </div>
          </Col>

          {/* Columna de grid de imágenes */}
          <Col xs={12} md={12} lg={6} className="servicios__image-column">
            <div className="servicios__image-grid">
              {gridImages.map((image) => (
                <div key={image.id} className="servicios__grid-item">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {/* Segunda fila: Cards sin imágenes */}
        <Row className="servicios__second-row gx-0">
          <Col xs={12}>
            <div className="servicios__cards-container">
              {serviceCards.map((card) => (
                <Card key={card.id} className="servicios__card">
                  <Card.Body>
                    <Card.Title className="servicios__card-title">
                      {card.title}
                    </Card.Title>
                    <Card.Text className="servicios__card-text">
                      {card.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Servicios;

