import React from "react";
import "./Card.scss";

const Card = ({ imageSrc, title, description, onClick, className = "" }) => (
  <div className={`project-card ${className}`} onClick={onClick}>
    <div className="project-card__image-container">
      <img
        src={imageSrc}
        alt={`Proyecto ${title} - Grupo Bruzza`}
        className="project-card__image"
      />
      {/* Título visible en móvil en la parte superior izquierda */}
      <div className="project-card__mobile-title">
        <h2>{title}</h2>
      </div>
    </div>
    <div className="project-card__content">
      <h2 className="project-card__title">{title}</h2>
      {/* <p className="project-card__description">{description}</p> */}
    </div>
  </div>
);

export default Card;
