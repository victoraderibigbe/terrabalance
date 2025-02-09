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
import ProductLayout from "@/layouts/ProductLayout";
import ContactForm from "@/components/ContactForm";

const Home = () => {
  const products = productsData();
  const categories = categoriesData();
  const heroData = heroDetails();
  const subHeroData = subHeroDetails();

  const even = products.filter((product, idx) => idx % 2 === 0);

  const filteredProducts = even.filter((product, idx) => idx < 13);

  return (
    <ProductLayout>
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
          <div className="product-cards-layout mt-3 md:mt-5 border-t py-5">
            {filteredProducts?.map((product) => (
              <div key={product.id}>
                <MyProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10 px-5 py-10 md:px-10 md:py-16 lg:py-16 lg:px-24 bg-primaryBrown text-neutralLight">
        <div>
          <h2 className="text-white">Get In Touch</h2>
          <p>
            We&apos;re here to answer any question you have about our products
            and programs. Kindly drop your message using the contact form. You
            can as well reach us using to contact information below.
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <Link href={"mailto:terrabalanceenterprise@gmail.com"}>
              terrabalanceenterprise@gmail.com
            </Link>{" "}
            <br />
            <strong>Phone:</strong>{" "}
            <Link href={"tel:+2348168131939"}>+2348168131939</Link>,{" "}
            <Link href={"tel:+2347045347214"}>+2347045347214</Link> <br />
            <strong>Address:</strong> Phase 2 road, Obafemi Awolowo University
            Teaching Hospital, Ile-Ife, Nigeria
          </p>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>

      {/* Map section */}
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.771461783164!2d4.549552474486474!3d7.490467311172852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10383790d70690b9%3A0x7e8f8401f8906ca4!2sObafemi%20Awolowo%20University%20Teaching%20Hospital!5e0!3m2!1sen!2sng!4v1738930114274!5m2!1sen!2sng"
          height="450"
          style={{ border: 0, width: "100%" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </ProductLayout>
  );
};

export default Home;
