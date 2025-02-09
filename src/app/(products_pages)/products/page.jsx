import MyBreadcrumb from "@/components/MyBreadcrumb";
import MyProductCard from "@/components/MyProductCard";
import { productsData } from "@/data/dataStore";

export const generateMetadata = () => {
  return {
    title: "Product Catalog - Terra Balance Enterprises",
    description:
      "Browse our extensive catalog of farm products and services, available for order.",
  };
};

const ProductsPage = () => {
  const products = productsData();

  return (
    <div className="mb-5">
      {/* Breadcrumb */}
      <div className="p-5 md:px-10">
        <MyBreadcrumb />
      </div>

      <div className="px-5 md:px-10 flex items-center justify-between">
        <h2>Product Catalog</h2>
        <p className="text-sm">
          Found <b>{products?.length}</b> items
        </p>
      </div>
      <div className="product-cards-layout px-5 md:px-10">
        {products?.map((product) => (
          <div key={product.id}>
            <MyProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
