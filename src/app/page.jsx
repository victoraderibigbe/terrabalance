import HeroSlider from "@/components/HeroSlider";
import SubHeroSlider from "@/components/SubHeroSlider";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import Link from "next/link";

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
      <div className="flex items-center justify-between gap-5 overflow-auto p-5 md:px-10 md:justify-center lg:px-16">
        <Link
          href={"#"}
          className="flex items-center gap-2 text-base md:text-lg min-w-44 w-full md:justify-center font-semibold text-foreground"
        >
          <div className="flex item-center p-1 rounded-full bg-gray-400">
            <Image
              src={"/images/icons8-meat-94.png"}
              alt="Meat icon"
              width={30}
              height={30}
            />
          </div>
          Meat Products
        </Link>
        <Link
          href={"#"}
          className="flex items-center gap-2 text-base md:text-lg min-w-44 w-full md:justify-center font-semibold text-foreground"
        >
          <div className="flex item-center p-1 rounded-full bg-gray-400">
            <Image
              src={"/images/icons8-salad-94.png"}
              alt="Meat icon"
              width={30}
              height={30}
            />
          </div>
          Vegetables
        </Link>
        <Link
          href={"#"}
          className="flex items-center gap-2 text-base md:text-lg min-w-44 w-full md:justify-center font-semibold text-foreground"
        >
          <div className="flex item-center p-1 rounded-full bg-gray-400">
            <Image
              src={"/images/icons8-healthy-eating-94.png"}
              alt="Meat icon"
              width={30}
              height={30}
            />
          </div>
          Fresh Fruits
        </Link>
        <Link
          href={"#"}
          className="flex items-center gap-2 text-base md:text-lg min-w-44 w-full md:justify-center font-semibold text-foreground"
        >
          <div className="flex item-center p-1 rounded-full bg-gray-400">
            <Image
              src={"/images/icons8-eggs-94.png"}
              alt="Meat icon"
              width={30}
              height={30}
            />
          </div>
          Diary & Eggs
        </Link>
        <Link
          href={"#"}
          className="flex items-center gap-2 text-base md:text-lg min-w-44 w-full md:justify-center font-semibold text-foreground"
        >
          <div className="flex item-center p-1 rounded-full bg-gray-400">
            <Image
              src={"/images/icons8-wheat-94.png"}
              alt="Meat icon"
              width={30}
              height={30}
            />
          </div>
          Grains and Staples
        </Link>
        <Link
          href={"#"}
          className="flex items-center gap-2 text-base md:text-lg min-w-44 w-full md:justify-center font-semibold text-foreground"
        >
          <div className="flex item-center p-1 rounded-full bg-gray-400">
            <Image
              src={"/images/icons8-coffee-to-go-94.png"}
              alt="Meat icon"
              width={30}
              height={30}
            />
          </div>
          Beverages
        </Link>
      </div>
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
