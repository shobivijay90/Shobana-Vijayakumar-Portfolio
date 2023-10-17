import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import {useState} from 'react';

const Nav = () => {

const [activeNav, setActiveNav] = useState("#");

  return (
   <nav>
    <a href="#header" className = { activeNav === '#' ? 'active' : ""} aria-label="Home"><AiOutlineHome/></a>
    <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === "#about" ? "active" : ""} aria-label="About"><AiOutlineUser/></a>
    <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === "#about" ? "active" : ""} aria-label="Experience"><BiBook/></a>
    <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === "#about" ? "active" : ""} aria-label="Contact"><BiMessageSquareDetail/></a>
   </nav>
  )
}

export default Nav