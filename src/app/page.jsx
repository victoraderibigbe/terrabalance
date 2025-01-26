import HeroSlider from "@/components/HeroSlider";
import SubHeroSlider from "@/components/SubHeroSlider";
import ProductCard from "@/components/ProductCard";
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
      {/* Hero section */}
      <HeroSlider data={heroData} />

      {/* Sub-hero section */}
      <div className="px-5 py-10 block md:hidden">
        <SubHeroSlider data={subHeroData} />
      </div>
      <div className="hidden md:flex items-center justify-center p-10 lg:p-16 gap-3 lg:gap-5">
        {subHeroData.map((each) => (
          <div key={each.title} className="rounded-xl max-w-md w-full">
            <ProductCard
              title={each.title}
              image={each.image}
              route={"/products"}
            />
          </div>
        ))}
      </div>

      {/* Categories section for small and medium screens */}
      <div className="p-5 md:px-10 lg:hidden">
        <h2>Categories</h2>
        <div className="border-t mt-2 py-3 md:py-5 flex flex-wrap justify-normal md:justify-start gap-5">
          {categories.map((cat, idx) => (
            <Link
              href={`/${cat.category.toLowerCase()}`}
              key={idx}
              className="md:max-w-sm md:min-w-56"
            >
              <CategoriesCard
                category={cat.category}
                imageUrl={cat.imageUrl}
                altText={cat.category}
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
                href={`/${cat.category.toLowerCase()}`}
                key={idx}
                className="min-w-96 max-w-sm w-full"
              >
                <CategoriesCard
                  category={cat.category}
                  imageUrl={cat.imageUrl}
                  altText={cat.category}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Popular products section */}
        <div className="col-span-4">
          <div className="flex items-center justify-between">
            <h2>Popular Products</h2>
            <Link href={"/products"}>View All</Link>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-5 mt-3 md:mt-5 border-t py-5">
            {filteredProducts.map((product, idx) => (
              <div key={product.id} className="col-span-2 md:col-span-1">
                <MyProductCard
                  productName={product.title}
                  imageUrl={product.image}
                  imageAlt={product.title}
                  weight={product.weight}
                  price={product.price}
                  route={`/products/${product.id}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
