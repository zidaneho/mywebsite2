import type React from "react";

interface FooterIconProps {
  iconSrc: string | "none";
  src: string;
}
const FooterIcon: React.FC<FooterIconProps> = ({ iconSrc, src }) => {
  return (
    <a href={src} className=" rounded-lg">
      <button className="flex flex-row items-center gap-2">
        <img src={iconSrc} className="w-5 h-5"></img>
      </button>
    </a>
  );
};
export default FooterIcon;
