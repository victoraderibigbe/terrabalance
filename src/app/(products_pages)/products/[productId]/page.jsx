import AddToCartButton from "@/components/AddToCartButton";
import MyBreadcrumb from "@/components/MyBreadcrumb";
import MyProductCard from "@/components/MyProductCard";
import { UserReview } from "@/components/UserReview";
import { productsData } from "@/data/dataStore";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

const ProductDetails = ({ params }) => {
  const { productId } = params;
  const allProducts = productsData();
  const product = allProducts.find(
    (product) => product.id === Number(productId)
  );

  if (!product) {
    return <div>Product not found</div>; // Handle product not found
  }

  const relatedProducts = allProducts.filter(
    (myProduct) => myProduct.category === product.category
  );

  return (
    <div>
      {/* Breadcrumb */}
      <div className="p-5">
        <MyBreadcrumb currentItemName={product.title} />
      </div>

      <div className="mb-5 md:mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-2 px-5 md:px-10 lg:px-24">
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
          <div className="lg:col-span-1 pt-5 md:pt-0 px-5">
            <h2>{product.title}</h2>
            <p>{product.weight}g</p>
            <h3>₦{product.price}</h3>
            <div className="my-5">
              <AddToCartButton product={product} />
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

        <div className="px-5 md:px-10 mt-5">
          <h2 className="mb-3 md:mb-5">Related Products</h2>
          <div className="grid grid-cols-4 gap-2 md:gap-5">
            {relatedProducts.map((eachProduct) => (
              <div key={eachProduct.id} className="col-span-2 lg:col-span-1">
                <MyProductCard product={eachProduct} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
