import HeroSlider from "@/components/HeroSlider";
import SubHeroSlider from "@/components/SubHeroSlider";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import Link from "next/link";
import CategoriesCard from "@/components/CategoriesCard";
import MyProductCard from "@/components/MyProductCard";
import {
  categoriesData,
  heroDetails,
  productsData,
  subHeroDetails,
} from "@/data/dataStore";

const Home = () => {
  const products = productsData();
  const categories = categoriesData();
  const heroData = heroDetails();
  const subHeroData = subHeroDetails();

  const even = products.filter((product, idx) => idx % 2 === 0);

  const filteredProducts = even.filter((product, idx) => idx < 12);

  return (
    <div>
      {/* Sub-navbar */}
      <div className="flex items-center justify-between gap-5 overflow-auto p-5 md:px-0">
        {categories.map((cat, idx) => (
          <Link
            key={idx}
            href={cat.route}
            className="flex items-center gap-2 text-base md:text-lg min-w-28 w-full md:justify-center font-semibold text-foreground"
          >
            <div className="flex item-center p-1 rounded-full bg-neutralGray">
              <Image
                src={cat.imageUrl}
                alt={cat.category}
                width={30}
                height={30}
              />
            </div>
            {cat.category}
          </Link>
        ))}
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
        <div className="border-t mt-2 py-3 md:py-5 flex flex-wrap justify-between md:justify-start gap-2 md:gap-5">
          {categories.map((cat, idx) => (
            <Link
              href={cat.route}
              key={idx}
              className="md:max-w-sm md:min-w-96"
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
            {categories.map((cat, idx) => (
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
