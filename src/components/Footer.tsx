import React from "react";
import github from "../assets/github-mark-white.png";
import linkedin from "../assets/InBug-White.png";
import FooterIcon from "./FooterIcon";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-1">
      <FooterIcon
        src="https://github.com/zidaneho"
        iconSrc={github}
      ></FooterIcon>
      <FooterIcon
        src="https://www.linkedin.com/in/zidane-ho/"
        iconSrc={linkedin}
      ></FooterIcon>
    </div>
  );
};

export default Footer;
