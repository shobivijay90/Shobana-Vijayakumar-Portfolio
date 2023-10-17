import "./about.css";
import logo from "../../assets/logo.jpg";
import { FaAward } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { MdCastForEducation } from "react-icons/md";

const About = () => {
  return (
    <section id="about" aria-label="About Shobana Vijayakumar">
      <h5 aria-level="1">Get to Know</h5>
      <h2 aria-level="2">About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={logo} alt="Shobana Vijayakumar" className="logo" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" aria-label="Award image"/>
              <h5 aria-level="1">Experience</h5>
              <small>5+ Years Working</small>
            </article>

            <article className="about__card">
              <GiSkills className="about__icon" aria-label="Skills image"/>
              <h5 aria-level="1">Skills</h5>
              <small>HTML, CSS, Javascript, Wordpress, React JS</small>
            </article>

            <article className="about__card">
              <MdCastForEducation className="about__icon" aria-label="Education image"/>
              <h5 aria-level="1">Education</h5>
              <small>Master's in Computer Applications</small>
            </article>
          </div>

          <p aria-label="description">
            As a front-end developer, my main responsibility is to create the
            visual and interactive components of websites and applications.
            Using my skills in HTML, CSS, JavaScript and React JS, I am able to
            bring a designer's vision to life in a user-friendly and functional
            way.
          </p>
          <a href="#contact" className="btn btn-primary" role="button">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
