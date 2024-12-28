import { Carousel } from "flowbite-react";
import HeroSlide from "../HeroSlide";
import meat from "../../../public/images/meat-bg.webp";
import fruits from "../../../public/images/fruits-bg.webp";
import vegetables from "../../../public/images/vegetables-bg.webp";

const HeroSlider = () => {
  return (
    <div className="h-96 md:h-[90vh]">
      <Carousel>
        <HeroSlide
          title="Buy healthy and quality meat from us"
          imageLarge={meat}
          route={"#"}
        />
        <HeroSlide
          title="Check out our fresh fruits and place your order"
          imageLarge={fruits}
          route={"#"}
        />
        <HeroSlide
          title="You need vegetables? We got you covered!"
          imageLarge={vegetables}
          route={"#"}
        />
      </Carousel>
    </div>
  );
};

export default HeroSlider;
