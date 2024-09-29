"use client";
import React, { useRef, useState } from "react";
import CardEvent from "./CardEvent";

const UpcomingEvent = () => {
  const upcomingList = [
    {
      id: 1,
      image: "/assets/upcoming-event-3.png",
      author: "M. Syauqi Imaduddin, S.Kom.",
      date: "5 Oktober 2024",
      title: "Mentoring Teknologi Pertanian 4.0 di Desa Karangjati",
      progress: 95,
      collectedAmount: "Rp. 3.605.500",
    },
    {
      id: 2,
      image: "/assets/upcoming-event-2.png",
      author: "Hana Devvani Marsyah, S.T.",
      date: "10 Oktober 2024",
      title: "Pelatihan Smart Farming di Desa Candirejo",
      progress: 76,
      collectedAmount: "Rp. 4.325.020",
    },
    {
      id: 3,
      image: "/assets/upcoming-event-1.png",
      author: "Prayoga Adi Setyawan, S.P",
      date: "2 November 2024",
      title: "Edukasi Pertanian Modern di Desa Tegalrejo",
      progress: 55,
      collectedAmount: "Rp. 1.320.000",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLButtonElement) return; // Prevent dragging when clicking a button
    e.preventDefault(); // Prevent default behavior
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault(); // Prevent default behavior
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // Adjust the scroll speed
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  // Handle touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.target instanceof HTMLButtonElement) return; // Prevent dragging when touching a button
    e.preventDefault(); // Prevent default behavior
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault(); // Prevent default behavior
    const x = e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // Adjust the scroll speed
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <div className="mt-10 w-full py-20 pl-8 md:min-h-fit md:pl-24">
      <div className="mb-8 flex justify-center">
        <h3 className="w-1/2 text-center font-space-grotesk text-3xl font-bold md:my-10 md:w-full md:text-start lg:text-5xl">
          Kegiatan Mendatang
        </h3>
      </div>
      <div
        ref={scrollRef}
        className="flex cursor-grab gap-8 overflow-x-hidden"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        style={{ userSelect: "none" }} // Prevent text selection
      >
        {upcomingList.map((item) => (
          <div key={item.id} className="flex justify-center">
            <CardEvent
              imageSrc={item.image}
              author={item.author}
              date={item.date}
              title={item.title}
              progress={item.progress}
              collectedAmount={item.collectedAmount}
              className="w-[18rem] md:w-[32rem]" // Adjust width as necessary
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvent;
