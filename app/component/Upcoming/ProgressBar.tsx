import React from "react";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="flex items-center gap-x-4">
      <div className="h-2 w-full rounded-full bg-gray-200 md:h-3">
        <div
          className="h-2 rounded-full bg-[#ECAB2E] transition-all duration-300 ease-in-out md:h-3"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <h6 className="text-sm font-bold md:text-base">{progress}%</h6>
    </div>
  );
};

export default ProgressBar;
