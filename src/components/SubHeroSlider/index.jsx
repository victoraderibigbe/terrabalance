import { Carousel } from "flowbite-react";
import SubHeroSlide from "../SubHeroSlide";

const SubHeroSlider = ({ data }) => {
  return (
    <div className="h-52">
      <Carousel>
        {data.map((each) => (
          <SubHeroSlide
            key={each.title}
            title={each.title}
            image={each.image}
            route={each.route}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default SubHeroSlider;
