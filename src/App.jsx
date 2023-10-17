import React, {useEffect} from "react";
import ReactGA from 'react-ga';
import Header from "./components/header/Header";
import About from "./components/about/About";
import Nav from './components/nav/Nav';
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";


const App = () => {

  useEffect(() => {
    ReactGA.initialize('G-3N6LYHQCYL'); // Replace with your Tracking ID
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <main>
      <Header />
      <Nav/>
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
