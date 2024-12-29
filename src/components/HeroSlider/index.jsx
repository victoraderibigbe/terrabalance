import { Carousel } from "flowbite-react";
import HeroSlide from "../HeroSlide";

const HeroSlider = ({ data }) => {
  return (
    <div className="h-96 md:h-[90vh]">
      <Carousel>
        {data.map((each) => (
          <HeroSlide
            key={each.title}
            title={each.title}
            subtitle={each.subtitle}
            image={each.image}
            route={each.route}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSlider;