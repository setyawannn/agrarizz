import Image from "next/image";
import React from "react";
import ProgressBar from "./ProgressBar";
import { UserCircleIcon, CalendarIcon } from "@heroicons/react/24/outline";

interface CardEventProps {
  imageSrc: string;
  author: string;
  date: string;
  title: string;
  progress: number;
  collectedAmount: string;
  className: string;
}

const CardEvent: React.FC<CardEventProps> = ({
  imageSrc,
  author,
  date,
  title,
  progress,
  collectedAmount,
  className,
}) => {
  return (
    <div className={`rounded-lg bg-white p-4 shadow-lg ${className}`}>
      <Image
        src={imageSrc}
        alt={title}
        width={600}
        height={600}
        className="mb-4 w-full"
      />
      <div className="flex w-full flex-col gap-y-4">
        <div className="flex flex-col gap-x-4 gap-y-2 text-[#369264] md:flex-row">
          <div className="flex items-center gap-x-2">
            <UserCircleIcon className="h-6 w-6" />
            <p className="text-sm md:text-base">{author}</p>
          </div>
          <div className="flex items-center gap-x-2">
            <CalendarIcon className="h-6 w-6" />
            <p className="text-sm md:text-base">{date}</p>
          </div>
        </div>
        <h4 className="text-wrap text-base font-bold md:text-2xl">{title}</h4>
        <div>
          <ProgressBar progress={progress} />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex h-full flex-col justify-between">
            <p className="text-sm font-medium text-slate-800 md:text-base">
              Terkumpul
            </p>
            <h6 className="font-space-grotesk text-base font-semibold text-secondary md:text-xl">
              {collectedAmount}
            </h6>
          </div>
          <button className="rounded-lg bg-primary px-6 py-2 text-sm font-medium text-white md:rounded-xl md:px-14 md:py-2 md:text-lg">
            Donasi
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardEvent;
