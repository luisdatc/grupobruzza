import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import equipoData from "./data/equipo";
import "./Equipo.scss";

/**
 * Componente que muestra la sección del equipo con tarjetas para cada miembro
 */
const Equipo = () => {
  return (
    <section className="equipo" id="elequipo">
      <Container>
        <h2 className="equipo__title">Conoce al equipo</h2>

        <Row className="justify-content-center">
          {equipoData.map((miembro) => (
            <Col
              xs={12}
              sm={12}
              md={4}
              lg={4}
              xl={4}
              key={miembro.id}
              className="mb-4"
            >
              <article className="equipo__card">
                <div className="equipo__card-wrapper">
                  {/* Contenedor de imagen */}
                  <div className="equipo__image-col">
                    <div className="equipo__image-container">
                      <img
                        src={miembro.image}
                        className="equipo__image"
                        alt={`${miembro.title} - ${miembro.text}`}
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Contenedor de texto */}
                  <div className="equipo__content-col">
                    <div className="equipo__content">
                      <h3 className="equipo__member-name">{miembro.title}</h3>
                      <p className="equipo__member-role">{miembro.text}</p>
                    </div>
                  </div>
                </div>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Equipo;
