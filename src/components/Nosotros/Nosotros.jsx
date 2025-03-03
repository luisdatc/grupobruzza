import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Nosotros.scss";

/**
 * Componente que muestra la sección "Quienes Somos" con información sobre la empresa
 */
const Nosotros = () => {
  // Datos de las tarjetas de beneficios
  const beneficios = [
    {
      id: "rapidez",
      title: "Respuestas rápidas y soluciones a medida",
      text: "Nos adaptamos a tus necesidades, ofreciendo diagnósticos precisos y tiempos de respuesta ágiles.",
      image: "/nosotros-1.png",
    },
    {
      id: "tecnologia",
      title: "Ultimas tecnología y materiales",
      text: "Implementamos las ultimas tecnologias y materiales para garantizar la eficiencia y calidad.",
      image: "/nosotros-2.png",
    },
    {
      id: "equipo",
      title: "Equipo de profesionales",
      text: "Contamos con un equipo de especialistas, capaz de gestionar proyectos complejos y entregar resultados excepcionales.",
      image: "/nosotros-3.png",
    },
    {
      id: "sostenibilidad",
      title: "Enfoque sostenible y transparencia",
      text: "Nuestra atención está ocentrada en ofrecer una experiencia excepcional para empresas, propietarios e inquilinos.",
      image: "/nosotros-4.png",
    },
  ];

  return (
    <section className="about d-flex align-items-start" id="quienessomos">
      <div
        className="about__background"
        style={{ backgroundImage: `url('/nosotros-image.png')` }}
      />
      <div className="about__overlay" />

      <Container>
        <Row className="justify-content-evenly align-items-stretch">
          {/* Columna izquierda */}
          <Col lg={6} md={12} className="about__info-panel">
            <div className="d-flex flex-column justify-content-between h-100">
              <div>
                <h1 className="about__title">
                  Compromiso y excelencia en cada proyecto
                </h1>
                <p className="about__description">
                  En Grupo Bruzza, transformamos espacios optimizando su
                  funcionalidad y eficiencia. Nos enfocamos en crear entornos
                  seguros y estéticamente agradables que eleven la calidad de
                  vida de nuestros clientes. Nuestra misión es proporcionar
                  soluciones integrales de diseño, construcción y obra.
                </p>
              </div>
              <div className="about__button-container text-center">
                <button className="about__cta-button">
                  <a
                    href="#servicios"
                    aria-label="Quienes Somos"
                    className="about__cta-button-link"
                  >
                    Nuestros Servicios
                  </a>
                </button>
              </div>
            </div>
          </Col>

          {/* Columna derecha */}
          <Col lg={6} md={12} className="about__benefits-panel">
            <h3 className="text-center mb-4 about__benefits-title">
              ¿Por qué elegirnos?
            </h3>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-2 g-3 g-md-4">
              {beneficios.map((beneficio, index) => (
                <Col key={beneficio.id}>
                  <Card className="about__benefit-card">
                    <Card.Img
                      variant="top"
                      src={beneficio.image}
                      className="about__benefit-icon"
                      alt={`Beneficio: ${beneficio.title}`}
                      loading="lazy"
                    />
                    <Card.Body>
                      <Card.Title className="about__benefit-title h5">
                        {beneficio.title}
                      </Card.Title>
                      <Card.Text className="about__benefit-text">
                        {beneficio.text}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Nosotros;
