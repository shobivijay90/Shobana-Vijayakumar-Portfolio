import avatar1 from "../../assets/avatar1.jpg";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h1 aria-level="1">Hello</h1>
        <h2 aria-level="2">I'm Shobana Vijayakumar</h2>
        <h3 className="text-light" aria-level="3">Front end Web Developer</h3>
        <CTA></CTA>
        <HeaderSocials />
        <div className="me" role="img" aria-label="Shobana Vijayakumar image">
          <img src={avatar1} alt="shobana vijayakumar" className="avatar1"/>
        </div>
        <a href="#contact" className="scroll__down" aria-label="scroll down to learn more about Shobana vijayakumar">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
