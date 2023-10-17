import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#header" className="footer__logo">
        Shobana Vijayakumar
      </a>
      <ul className="permalinks">
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/shobivijay90/" aria-label="facebook profile link">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/shobi_vijay/" aria-label="Insagram profile link">
          <FiInstagram />
        </a>
        <a href="https://twitter.com/shobanavijay" aria-label="twitter profile link">
          <IoLogoTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Shobana Vijayakumar. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
