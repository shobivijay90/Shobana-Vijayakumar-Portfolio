import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className="header__socials" role="navigation" aria-label="Social links">
      <a href="https://www.linkedin.com/in/shobana-v-144404230/" target="_blank" rel="noreferrer" aria-label="Shobana Vijayakumar LinkedIn profile">
        <AiOutlineLinkedin />
      </a>
      <a href="https://github.com/shobivijay90" target="_blank" rel="noreferrer" aria-label="Shobana Vijayakumar GitHub profile">
        <AiFillGithub />
      </a>
      <a href="https://codepen.io/shobivijay90" target="_blank" rel="noreferrer" aria-label="Shobana Vijayakumar Codepen profile">
        <AiOutlineCodepen />
      </a>
    </div>
  );
};

export default HeaderSocials;
