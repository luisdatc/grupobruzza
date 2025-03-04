import { useState } from "react";
import { Container } from "react-bootstrap";
import "./Social.scss";

/**
 * Componente para mostrar la sección de redes sociales y contacto
 */
const Social = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  // Datos de redes sociales
  const socialMedia = [
    {
      id: "instagram",
      name: "Instagram",
      defaultImg: "/instagram-footer.svg",
      hoverImg: "/instagram-hover.svg",
      link: "https://www.instagram.com/bruzzagrupo?igsh=ZXZiN3R3Ym1mYmFs",
      ariaLabel: "Visita nuestro perfil de Instagram",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      defaultImg: "/linkedin-footer.svg",
      hoverImg: "/linkedin-hover.svg",
      link: "https://www.linkedin.com/company/grupobruzza/",
      ariaLabel: "Conéctate con nosotros en LinkedIn",
    },
    {
      id: "whatsapp",
      name: "WhatsApp",
      defaultImg: "/WhatsApp-footer.svg",
      hoverImg: "/whatsapp-hover.svg",
      link: "https://wa.me/91123945353",
      ariaLabel: "Contáctanos por WhatsApp",
    },
    {
      id: "facebook",
      name: "Facebook",
      defaultImg: "/facebook-footer.svg",
      hoverImg: "/facebook-hover.svg",
      link: "https://www.facebook.com/share/1BSfnzQGF3/",
      ariaLabel: "Síguenos en Facebook",
    },
  ];

  // Manejadores de eventos
  const handleHover = (icon) => setHoveredIcon(icon);
  const handleMouseLeave = () => setHoveredIcon(null);

  return (
    <section className="social" id="contacto">
      <Container>
        <h2 className="social__title">Ponete en contacto</h2>

        <div className="social__grid">
          {socialMedia.map((media) => (
            <div
              key={media.id}
              className="social__item"
              onMouseEnter={() => handleHover(media.id)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href={media.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={media.ariaLabel}
                className="social__link"
              >
                <img
                  src={
                    hoveredIcon === media.id ? media.hoverImg : media.defaultImg
                  }
                  alt={`${media.name} logo`}
                  className="social__icon"
                  width="60"
                  height="60"
                  loading="lazy"
                />
                <h3 className="social__name">{media.name}</h3>
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Social;
