import React from "react";



const HeadBar: React.FC = () => {
  return (
    <div className="flex w-full h-10 items-start">
      <div className="flex flex-row ml-2 w-full justify-start">
        <div className="flex gap-2 text-start">
          <p className="text-black">Zidane Ho</p>
        </div>
      </div>
    </div>
  );
};

export default HeadBar;
