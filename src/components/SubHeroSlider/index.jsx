import { Carousel } from "flowbite-react";
import ProductCard from "../ProductCard";

const SubHeroSlider = ({ data }) => {
  return (
    <div className="">
      <Carousel>
        {data.map((each) => (
          <ProductCard
            key={each.title}
            title={each.title}
            image={each.image}
            route={"/products"}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default SubHeroSlider;
