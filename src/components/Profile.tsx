import React from "react";
import profilePicture from "../assets/profile-picture.png";
import collegePicture from "../assets/college.png";
import homePicture from "../assets/home.png";
const Profile: React.FC = () => {
  return (
    <div className="flex flex-row">
      <img
        src={profilePicture}
        className="w-48 h-48 rounded-full object-cover"
      ></img>
      <div className="flex flex-col pl-4">
        <p className="font-extrabold text-3xl">Zidane Ho</p>
        <p className="text-sm font-medium">Games Developer</p>
        <div className="flex flex-row items-center mt-1 gap-2">
          <img src={collegePicture} className="w-8 h-8"></img>
          <p className="text-md text-gray">Computer Science at UC San Diego</p>
        </div>
        <div className="flex flex-row items-center mt-1 gap-2">
          <img src={homePicture} className="w-8 h-8"></img>
          <p className="text-md text-gray">Saratoga, CA</p>
        </div>
      </div>
    </div>
  );
};
export default Profile;
