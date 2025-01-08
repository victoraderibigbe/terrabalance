import HeroSlider from "@/components/HeroSlider";
import SubHeroSlider from "@/components/SubHeroSlider";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import Link from "next/link";
import CategoriesCard from "@/components/CategoriesCard";
import MyProductCard from "@/components/MyProductCard";
import { productsData } from "@/data/products";

const Home = () => {
  const products = productsData();

  const even = products.filter((product, idx) => idx % 2 === 0);

  const filteredProducts = even.filter((product, idx) => idx < 8);

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
      image: "/images/fruits.webp",
      route: "#",
    },
    {
      title: "Homemade & Easy",
      subtitle: "We make it easy for you to enjoy our meals",
      image: "/images/vegetables.webp",
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

  const categoriesData = [
    {
      category: "Meat Products",
      quantity: "20 items",
      imageUrl: "/images/icons8-meat-94.png",
      route: "#",
    },
    {
      category: "Vegetables",
      quantity: "15 items",
      imageUrl: "/images/icons8-salad-94.png",
      route: "#",
    },
    {
      category: "Fresh Fruits",
      quantity: "10 items",
      imageUrl: "/images/icons8-healthy-eating-94.png",
      route: "#",
    },
    {
      category: "Diary & Eggs",
      quantity: "5 items",
      imageUrl: "/images/icons8-eggs-94.png",
      route: "#",
    },
    {
      category: "Grains & Staples",
      quantity: "15 items",
      imageUrl: "/images/icons8-wheat-94.png",
      route: "#",
    },
    {
      category: "Beverages",
      quantity: "10 items",
      imageUrl: "/images/icons8-coffee-to-go-94.png",
      route: "#",
    },
  ];

  return (
    <div>
      {/* Sub-navbar */}
      <div className="flex items-center justify-between gap-5 overflow-auto p-5 md:px-10 md:justify-center lg:px-16">
        <Link
          href={"#"}
          className="flex items-center gap-2 text-base md:text-lg min-w-44 w-full md:justify-center font-semibold text-foreground"
        >
          <div className="flex item-center p-1 rounded-full bg-neutralGray">
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
          <div className="flex item-center p-1 rounded-full bg-neutralGray">
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
          <div className="flex item-center p-1 rounded-full bg-neutralGray">
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
          <div className="flex item-center p-1 rounded-full bg-neutralGray">
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
          <div className="flex item-center p-1 rounded-full bg-neutralGray">
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
          <div className="flex item-center p-1 rounded-full bg-neutralGray">
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

      {/* Hero section */}
      <HeroSlider data={heroData} />

      {/* Sub-hero section */}
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

      {/* Categories section for small and medium screens */}
      <div className="p-5 md:px-10 lg:hidden">
        <h2>Categories</h2>
        <div className="border-t mt-2 py-3 md:py-5 flex flex-col md:flex-row md:flex-wrap md:justify-start gap-2 md:gap-5">
          {categoriesData.map((cat, idx) => (
            <Link
              href={cat.route}
              key={idx}
              className="min-w-96 max-w-sm w-full"
            >
              <CategoriesCard
                category={cat.category}
                quantity={cat.quantity}
                imageUrl={cat.imageUrl}
                altText={cat.category}
                route={cat.route}
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="lg:grid grid-cols-5 gap-5 p-5 md:px-10 lg:px-16">
        {/* Categories section for large screens */}
        <div className="col-span-1">
          <h2 className="hidden lg:block">Categories</h2>
          <div className="hidden lg:flex flex-col gap-2 border-t py-5 mt-5">
            {categoriesData.map((cat, idx) => (
              <Link
                href={cat.route}
                key={idx}
                className="min-w-96 max-w-sm w-full"
              >
                <CategoriesCard
                  category={cat.category}
                  quantity={cat.quantity}
                  imageUrl={cat.imageUrl}
                  altText={cat.category}
                  route={cat.route}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Popular products section */}
        <div className="col-span-4">
          <div className="flex items-center justify-between">
            <h2>Popular Products</h2>
            <Link href={"#"}>View All</Link>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-5 mt-3 md:mt-5 justify-between border-t py-5">
            {filteredProducts.map((product, idx) => (
              <MyProductCard
                productName={product.title}
                imageUrl={product.image}
                imageAlt={product.title}
                weight={product.weight}
                price={product.price}
                route={product.route}
                key={idx}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
