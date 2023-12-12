"use client";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React, { Children, useEffect, useState } from "react";
import { clearInterval, setInterval } from "timers";

interface CarouselProps {
  children: React.ReactNode;
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const slides = React.Children.count(children);
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides - 1 : curr - 1));
  };

  const next = () => {
    setCurr((curr) => (curr === slides - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative my-10">
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform ease-in-out d rounded-md
      duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {children}
        </div>
      </div>
      <div className="absolute top-0 bottom-0 -left-6 flex items-center justify-center">
        <button
          onClick={prev}
          className="h-min bg-background-3 hover:bg-background-2 p-3 rounded-full"
        >
          <ArrowBackIosNewIcon className="text-primary" />
        </button>
      </div>
      <div className="absolute top-0 bottom-0 -right-6 flex items-center justify-center">
        <button
          onClick={next}
          className="h-min bg-background-3 hover:bg-background-2 p-3 rounded-full"
        >
          <ArrowForwardIosIcon className="text-primary" />
        </button>
      </div>
      <div className="absolute bottom-4 left-10">
        <div className="flex items-center justify-center gap-2">
          {Array.from({ length: slides }, (_, i) => (
            <div
              key={i}
              className={`transition-all w-2 h-2 rounded-full
           bg-white
           ${curr == i ? "w-4" : "bg-opacity-50"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
