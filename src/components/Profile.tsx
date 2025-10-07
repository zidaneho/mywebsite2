import React from "react";
import profilePicture from "../assets/profile-picture.png";
import { GraduationCap, House } from "lucide-react";
const Profile: React.FC = () => {
  return (
    <div className="flex flex-row">
      <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
        <img
          src={profilePicture}
          className="w-full h-full object-cover"
          alt="Zidane Ho"
        />
      </div>
      <div className="flex flex-col pl-4 animate-fade-in-slide [animation-delay:50ms]">
        <p className="font-extrabold text-3xl">Zidane Ho</p>
        <p className="text-sm font-medium">Game Developer</p>
        <div className="flex flex-row items-center mt-1 gap-2">
          <GraduationCap className="w-4 h-4"></GraduationCap>
          <p className="text-sm">B.S of Computer Science at UC San Diego</p>
        </div>
        <div className="flex flex-row items-center mt-1 gap-2">
          <House className="w-4 h-4"></House>
          <p className="text-sm">Saratoga, CA</p>
        </div>
      </div>
    </div>
  );
};
export default Profile;
