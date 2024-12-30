import HeroSlider from "@/components/HeroSlider";
import SubHeroSlider from "@/components/SubHeroSlider";
import ProductCard from "@/components/ProductCard";

const Home = () => {
  const heroData = [
    {
      title: "Discover the Flavors",
      subtitle: "Our delectable meats, fruits, and vegetables",
      image: "/images/meat-bg.webp",
      route: "#",
    },
    {
      title: "Healthy & Delicious",
      subtitle: "At Delicious Delights, we prioritize your health",
      image: "/images/fruits-bg.webp",
      route: "#",
    },
    {
      title: "Homemade & Easy",
      subtitle: "We make it easy for you to enjoy our meals",
      image: "/images/vegetables-bg.webp",
      route: "#",
    },
  ];

  const subHeroData = [
    {
      title: "Refreshing Beverages",
      subtitle: "Stay refreshed with our range of beverages",
      image: "/images/beverage.webp",
      route: "#",
    },
    {
      title: "Dairy & Eggs",
      subtitle: "Get your daily dose of dairy and eggs",
      image: "/images/milk.webp",
      route: "#",
    },
    {
      title: "Grains & Cereals",
      subtitle: "Enjoy a variety of grains and cereals",
      image: "/images/grain.webp",
      route: "#",
    },
  ];

  return (
    <div>
      <HeroSlider data={heroData} />
      <div className="px-5 py-10 block md:hidden">
        <SubHeroSlider data={subHeroData} />
      </div>
      <div className="hidden md:flex items-center justify-center p-16 gap-5">
        {subHeroData.map((each) => (
          <div key={each.title} className="rounded-xl max-w-md w-full">
            <ProductCard
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
