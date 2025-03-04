import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import "./NavBar.scss";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "quienessomos", label: "Quienes Somos" },
    { id: "servicios", label: "Servicios" },
    { id: "proyectos", label: "Proyectos" },
    { id: "elequipo", label: "El Equipo" },
    { id: "contacto", label: "Contacto" },
  ];

  const isMobile = screenWidth < 992;

  // Handle window resize
  useEffect(() => {
    const updateWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Close menu when screen becomes desktop
  useEffect(() => {
    if (screenWidth >= 992) {
      setMenuOpen(false);
    }
  }, [screenWidth]);

  // Handle scroll for navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle menu open/close
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Handle smooth scroll with offset
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const yOffset = -90; // Adjust based on navbar height
      const yPosition =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: yPosition, behavior: "smooth" });
      closeMenu(); // Close menu after scrolling
    }
  };

  // Render social icons
  const SocialIcons = () => (
    <>
      <a
        href="https://wa.me/91123945353"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <BsWhatsapp />
      </a>
      <a
        href="https://www.instagram.com/bruzzagrupo?igsh=ZXZiN3R3Ym1mYmFs"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FiInstagram />
      </a>
    </>
  );

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="header__content">
        {/* Logo */}
        <div className="header__logo">
          <a href="#inicio" aria-label="Inicio">
            <img src="/grupobruzza-nav.svg" alt="Grupo Bruzza Logo" />
          </a>
        </div>

        {/* Navigation Menu */}
        <nav
          className={`header__nav ${menuOpen ? "header__nav--open" : ""}`}
          aria-expanded={menuOpen}
        >
          {/* Mobile Logo */}
          {isMobile && (
            <div className="header__logo-mobile">
              <img src="/grupobruzza-menu.svg" alt="Grupo Bruzza Logo" />
            </div>
          )}

          {/* Mobile Close Button */}
          {isMobile && (
            <button
              className="header__close-btn"
              onClick={closeMenu}
              aria-label="Cerrar menú"
            >
              <FaTimes />
            </button>
          )}

          {/* Navigation Items */}
          <ul className="header__nav-list">
            {navItems.map((item) => (
              <li key={item.id} className="header__nav-item">
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleSmoothScroll(e, item.id)}
                  className="header__nav-link"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Social Icons */}
          {isMobile && (
            <div className="header__socials-mobile">
              <SocialIcons />
            </div>
          )}
        </nav>

        {/* Desktop Social Icons */}
        {!isMobile && (
          <div className="header__socials">
            <SocialIcons />
          </div>
        )}

        {/* Mobile Menu Toggle */}
        {isMobile && (
          <button
            className="header__toggle-btn"
            onClick={toggleMenu}
            aria-label="Abrir menú"
          >
            <FaBars />
          </button>
        )}
      </div>
    </header>
  );
};

export default NavBar;
