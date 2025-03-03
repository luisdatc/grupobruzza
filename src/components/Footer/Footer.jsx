import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Telephone, Envelope, GeoAlt } from "react-bootstrap-icons";
import "./Footer.scss";

const Footer = () => {
  // Datos de contacto
  const contactInfo = [
    {
      id: "phone",
      icon: <Telephone className="footer__contact-icon" />,
      content: "+54 9 11 2394-5353",
      href: "https://wa.me/91123945353",
      isLink: true,
    },
    {
      id: "email",
      icon: <Envelope className="footer__contact-icon" />,
      content: "info@grupobruzza.com.ar",
      href: "mailto:info@grupobruzza.com.ar",
      isLink: true,
    },
    {
      id: "address",
      icon: null,
      content: "Horarios de atencion de Lunes a Viernes de 09 a 18hs",
      isLink: false,
    },
  ];

  // Enlaces de navegación
  const navLinks = [
    { id: "inicio", label: "Inicio" },
    { id: "quienessomos", label: "Quienes somos" },
    { id: "servicios", label: "Servicios" },
    { id: "proyectos", label: "Proyectos" },
    { id: "elequipo", label: "El equipo" },
    { id: "contactanos", label: "Contacto" },
  ];

  // Divide los enlaces en dos columnas
  const firstColumnLinks = navLinks.slice(0, 3);
  const secondColumnLinks = navLinks.slice(3);

  return (
    <footer className="footer">
      <Container>
        <Row className="footer__row">
          {/* Logo Column */}
          <Col lg={3} md={4} className="footer__logo">
            <img
              src="/grupobruzza-footer.svg"
              alt="Grupo Bruzza Logo"
              loading="lazy"
            />
          </Col>

          {/* Contact Info Column */}
          <Col lg={3} md={4} className="footer__contact">
            <h2 className="footer__heading">Contacto</h2>
            <ul className="footer__contact-list">
              {contactInfo.map((item) => (
                <li key={item.id} className="footer__contact-item">
                  {item.icon}
                  {item.isLink ? (
                    <a
                      href={item.href}
                      className="footer__link"
                      aria-label={`Contactarnos por ${item.id}`}
                    >
                      {item.content}
                    </a>
                  ) : (
                    <span>{item.content}</span>
                  )}
                </li>
              ))}
            </ul>
          </Col>

          {/* Sections Column */}
          <Col lg={3} md={4} className="footer__nav">
            <h2 className="footer__heading">Secciones</h2>
            <Row className="footer__nav-grid">
              <Col xs={6}>
                <ul className="footer__nav-list">
                  {firstColumnLinks.map((link) => (
                    <li key={link.id} className="footer__nav-item">
                      <a
                        href={`#${link.id}`}
                        className="footer__link"
                        aria-label={`Ir a sección ${link.label}`}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </Col>
              <Col xs={6}>
                <ul className="footer__nav-list">
                  {secondColumnLinks.map((link) => (
                    <li key={link.id} className="footer__nav-item">
                      <a
                        href={`#${link.id}`}
                        className="footer__link"
                        aria-label={`Ir a sección ${link.label}`}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
