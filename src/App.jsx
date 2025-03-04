import { useEffect, lazy, Suspense } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Nosotros from "./components/Nosotros/Nosotros";
// Carga diferida de componentes menos críticos
const Servicios = lazy(() => import("./components/Servicios/Servicios"));
const Proyectos = lazy(() => import("./components/Proyectos/Proyectos"));
const Equipo = lazy(() => import("./components/Equipo/Equipo"));
const Social = lazy(() => import("./components/Social/Social"));
const Footer = lazy(() => import("./components/Footer/Footer"));
import AOS from "aos";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      disable: "mobile",
      mirror: true,
    });
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            Grupo Bruzza | Innovación en diseño, construcción y obra
          </title>
          <meta
            name="description"
            content="Soluciones integrales y tecnológicas para empresas y administraciones de consorcios. Expertos en construcción, mantenimiento y facility management."
          />
          <meta name="theme-color" content="#0286c5" />
          <link rel="canonical" href="https://grupobruzza.com.ar" />
        </Helmet>

        <NavBar />
        <Home />
        <Nosotros />
        <Suspense
          fallback={<div className="loading-placeholder">Cargando...</div>}
        >
          <Servicios />
          <Proyectos />
          <Equipo />
          <Social />
          <Footer />
        </Suspense>
      </HelmetProvider>
    </>
  );
}

export default App;
