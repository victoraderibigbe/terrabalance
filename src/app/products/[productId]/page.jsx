import MyBreadcrumb from "@/components/MyBreadcrumb";
import MyProductCard from "@/components/MyProductCard";
import QuantityButton from "@/components/QuantityButton";
import { UserReview } from "@/components/UserReview";
import { categoriesData, productsData } from "@/data/dataStore";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

const ProductDetails = async ({ params }) => {
  const categories = categoriesData();

  const productId = (await params).productId;

  const allProducts = productsData();

  const product = allProducts.find(
    (product) => product.id === Number(productId)
  );

  const relatedProducts = allProducts.filter(
    (myProduct) => myProduct.category == product.category
  );

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

      {/* Breadcrumb */}
      <div className="p-5">
        <MyBreadcrumb currentItemName={product.title} />
      </div>

      <div className="mb-5 md:mb-10">
        <div className="grid grid-cols-2">
          <div className="col-span-2 md:col-span-1 px-5 md:px-10 lg:px-24">
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 col-span-2">
              <Carousel slide={false}>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={500}
                  height={500}
                />
                <Image
                  src={product.image}
                  alt={product.title}
                  width={500}
                  height={500}
                />
                <Image
                  src={product.image}
                  alt={product.title}
                  width={500}
                  height={500}
                />
              </Carousel>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 pt-5 md:pt-0 px-5 md:px-8 lg:px-16">
            <h2>{product.title}</h2>
            <p>{product.weight}g</p>
            <h3>₦{product.price}</h3>
            <div className="flex items-center justify-between gap-3 my-5">
              <QuantityButton />
              <button className="bg-primaryBrown border-primaryBrown text-neutralLight px-10 h-16 w-full gap-3 rounded-full font-semibold">
                Add To Cart
              </button>
            </div>
            <p>{product.description}</p>

            <div>
              <div className="flex items-center justify-between mb-3">
                <h4>Customer Reviews</h4>
                <Link href={"#"}>View All</Link>
              </div>

              <div className="h-32">
                <Carousel pauseOnHover>
                  {product.reviews.map((review, idx) => (
                    <div key={idx}>
                      <UserReview
                        customerName={review.customer}
                        review={review.comment}
                        rating={review.rating}
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 md:px-10">
          <h2 className="mb-3 md:mb-5">Related Products</h2>
          <div className="grid grid-cols-4 gap-2 md:gap-5">
            {relatedProducts.map((eachProduct) => (
              <div key={eachProduct.id} className="col-span-2 lg:col-span-1">
                <MyProductCard
                  productName={eachProduct.title}
                  imageUrl={eachProduct.image}
                  imageAlt={eachProduct.title}
                  weight={eachProduct.weight}
                  price={eachProduct.price}
                  route={`/products/${eachProduct.id}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
