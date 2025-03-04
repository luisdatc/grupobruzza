import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "./Home.scss";

const Home = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Refresh AOS when zoom state changes
  useEffect(() => {
    AOS.refresh();
  }, [isZoomed]);

  // Initialize sections on load
  useEffect(() => {
    const nosotrosSection = document.getElementById("quienessomos");
    if (nosotrosSection) {
      nosotrosSection.style.opacity = "1";
    }
  }, []);

  const scrollToNosotros = () => {
    // Adjust zoom duration based on screen size
    const zoomDuration = windowWidth < 768 ? 400 : 600;

    // First apply zoom to image
    setIsZoomed(true);

    // Continue with transition after delay
    setTimeout(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        const nosotrosSection = document.getElementById("quienessomos");

        if (nosotrosSection) {
          // Apply entry animation class
          nosotrosSection.classList.add("animating-in");

          // Get navbar height for offset
          const navbar = document.querySelector(".header");
          const navbarHeight = navbar ? navbar.offsetHeight : 0;

          // Scroll to section
          window.scrollTo({
            top: nosotrosSection.offsetTop - navbarHeight,
            behavior: "smooth",
          });

          // Remove animation class and reset state
          setTimeout(() => {
            setIsTransitioning(false);
            setIsZoomed(false);
            nosotrosSection.classList.remove("animating-in");
          }, 500);
        }
      }, zoomDuration);
    }, 300);
  };

  return (
    <section className="home" id="inicio" lang="es">
      {/* Transition overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="home__overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          />
        )}
      </AnimatePresence>

      {/* Main content with exit animation */}
      <AnimatePresence>
        {!isTransitioning ? (
          <motion.div
            className="home__container"
            initial={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 1.5,
              transition: { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] },
            }}
          >
            <div className="home__content">
              <h1 className="home__title">
                <span className="home__title-main">Innovación en diseño</span>
                <span className="home__title-secondary">
                  , construcción y obra
                </span>
              </h1>
              <p className="home__description">
                Soluciones integrales y tecnológicas para empresas
                <br />y administraciones de consorcios
              </p>
              <a
                className="home__button home__button-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.me/5491123845353?text=Hola,%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20Grupo%20Bruzza.%20%C2%BFPodr%C3%ADan%20asesorarme%20sobre%20c%C3%B3mo%20pueden%20ayudarme?%20%C2%A1Gracias!%0A"
              >
                Contáctanos Ahora
                <span className="home__button-arrow">→</span>
              </a>
            </div>

            <div className="home__image-wrapper">
              <img
                src="/home-image.jpeg"
                alt="Soluciones innovadoras para residencias"
                className={`home__image ${
                  isZoomed ? "home__image--zoomed" : ""
                }`}
                data-aos={isZoomed ? "zoom-in" : ""}
              />
              <motion.button
                className="home__scroll-button"
                onClick={scrollToNosotros}
                aria-label="Desplazar hacia Quiénes Somos"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="12"
                  viewBox="0 0 20 12"
                  fill="none"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <path
                    d="M19.7335 2.09835L10.643 11.1888C10.5586 11.2733 10.4583 11.3404 10.348 11.3861C10.2376 11.4319 10.1193 11.4554 9.99988 11.4554C9.88041 11.4554 9.76212 11.4319 9.65177 11.3861C9.54141 11.3404 9.44115 11.2733 9.35673 11.1888L0.266279 2.09835C0.0957052 1.92778 -0.00012207 1.69643 -0.00012207 1.4552C-0.00012207 1.21398 0.0957052 0.982629 0.266279 0.812055C0.436853 0.641481 0.6682 0.545654 0.909428 0.545654C1.15066 0.545654 1.382 0.641481 1.55258 0.812055L9.99988 9.26049L18.4472 0.812055C18.5316 0.727595 18.6319 0.660598 18.7423 0.614889C18.8526 0.56918 18.9709 0.545654 19.0903 0.545654C19.2098 0.545654 19.328 0.56918 19.4384 0.614889C19.5487 0.660598 19.649 0.727595 19.7335 0.812055C19.8179 0.896515 19.8849 0.996783 19.9306 1.10713C19.9764 1.21749 19.9999 1.33576 19.9999 1.4552C19.9999 1.57465 19.9764 1.69292 19.9306 1.80327C19.8849 1.91363 19.8179 2.01389 19.7335 2.09835Z"
                    fill="#FEFEFE"
                  />
                </motion.svg>
              </motion.button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
};

export default Home;
