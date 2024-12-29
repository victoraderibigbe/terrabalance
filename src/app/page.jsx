import HeroSlider from "@/components/HeroSlider";
import meat from "../../public/images/meat-bg.webp";
import fruits from "../../public/images/fruits-bg.webp";
import vegetables from "../../public/images/vegetables-bg.webp";
import beverages from "../../public/images/beverages.webp";
import diaryEggs from "../../public/images/dairy-eggs.webp";
import grains from "../../public/images/grains.webp";
import SubHeroSlider from "@/components/SubHeroSlider";
import SubHeroSlide from "@/components/SubHeroSlide";

const Home = () => {
  const heroData = [
    {
      title: "Discover the Flavors",
      subtitle: "Our delectable meats, fruits, and vegetables",
      image: meat,
      route: "#",
    },
    {
      title: "Healthy & Delicious",
      subtitle: "At Delicious Delights, we prioritize your health",
      image: fruits,
      route: "#",
    },
    {
      title: "Homemade & Easy",
      subtitle: "We make it easy for you to enjoy our meals",
      image: vegetables,
      route: "#",
    },
  ];

  const subHeroData = [
    {
      title: "Refreshing Beverages",
      subtitle: "Stay refreshed with our range of beverages",
      image: beverages,
      route: "#",
    },
    {
      title: "Dairy & Eggs",
      subtitle: "Get your daily dose of dairy and eggs",
      image: diaryEggs,
      route: "#",
    },
    {
      title: "Grains & Cereals",
      subtitle: "Enjoy a variety of grains and cereals",
      image: grains,
      route: "#",
    },
  ];

  return (
    <div>
      <HeroSlider data={heroData} />
      <div className="px-5 py-10 block md:hidden">
        <SubHeroSlider data={subHeroData} />
      </div>
      <div className="hidden md:flex items-center justify-around p-16 gap-10">
        {subHeroData.map((each) => (
          <div key={each.title} className="h-56 rounded-xl max-w-md w-full">
            <SubHeroSlide
              title={each.title}
              image={each.image}
              route={each.route}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
