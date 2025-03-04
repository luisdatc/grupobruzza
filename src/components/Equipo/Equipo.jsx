import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import equipoData from "./data/equipo";
import "./Equipo.scss";

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
              md={3}
              lg={3}
              xl={3}
              key={miembro.id}
              className="mb-4"
            >
              <article className="equipo__card">
                <div className="equipo__card-wrapper">
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

                  <div className="equipo__content-col">
                    <div className="equipo__content">
                      <h3 className="equipo__member-name">
                        <a
                          href={miembro.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="equipo__linkedin-link"
                        >
                          {miembro.title}
                        </a>
                      </h3>
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
