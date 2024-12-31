"use client";

import { useEffect, useState } from "react";
import HeroSlide from "../HeroSlide";

const HeroSlider = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <div className="h-96 carousel-fade relative">
      {data.map((each, index) => (
        <div
          key={each.title}
          className={`carousel-item ${
            index === activeIndex ? "carousel-item-active" : ""
          }`}
        >
          <HeroSlide
            title={each.title}
            subtitle={each.subtitle}
            image={each.image}
            route={each.route}
          />
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;
