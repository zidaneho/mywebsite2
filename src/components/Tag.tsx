import type React from "react";

interface TagProps {
  name: string;
  iconSrc: string | "none";
  src: string;
}
const Tag: React.FC<TagProps> = ({ name, iconSrc, src }) => {
  return (
    <a href={src} className=" rounded-lg">
      <button className="flex flex-row items-center gap-2">
        {iconSrc !== "none" && <img src={iconSrc} className="w-5 h-5"></img>}
        <p className="text-md">{name}</p>
      </button>
    </a>
  );
};
export default Tag;
