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
      <div className="grid grid-cols-4 md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-5 px-5 md:px-10">
        {products?.map((product, idx) => (
          <div key={product.id} className="col-span-2 md:col-span-1">
            <MyProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
