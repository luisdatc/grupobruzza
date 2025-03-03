import { useEffect } from "react";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Nosotros from "./components/Nosotros/Nosotros";
import Servicios from "./components/Servicios/Servicios";
import Proyectos from "./components/Proyectos/Proyectos";
import Equipo from "./components/Equipo/Equipo";
import Social from "./components/Social/Social";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <>
      <NavBar />
      <Home />
      <Nosotros />
      <Servicios />
      <Proyectos />
      <Equipo />
      <Social />
      <Footer />
    </>
  );
}

export default App;
