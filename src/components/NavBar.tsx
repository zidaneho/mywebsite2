import React from "react";
import Tag from "./Tag";
import github from "../assets/github-mark-white.png";
import linkedin from "../assets/InBug-White.png";

export interface NavBarProps {
  includeHome: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ includeHome }) => {
  return (
    <div className="flex flex-row justify-center items-center gap-1">
      {includeHome && <Tag name="Home" src="/" iconSrc="none"></Tag>}
      <Tag name="Portfolio" src="/portfolio" iconSrc="none"></Tag>
      <Tag name="About" src="/about" iconSrc="none"></Tag>
      <Tag name="Contact" src="/contact" iconSrc="none"></Tag>
      <Tag
        name="GitHub"
        src="https://github.com/zidaneho"
        iconSrc={github}
      ></Tag>
      <Tag
        name="Linkedin"
        src="https://www.linkedin.com/in/zidane-ho/"
        iconSrc={linkedin}
      ></Tag>
    </div>
  );
};

export default NavBar;
