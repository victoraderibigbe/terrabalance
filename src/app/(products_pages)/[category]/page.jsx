import MyBreadcrumb from "@/components/MyBreadcrumb";
import MyProductCard from "@/components/MyProductCard";
import { productsData } from "@/data/dataStore";
import { capitalize } from "@/utils/utils";

export const generateMetadata = async ({ params }) => {
  const { category } = await params;

  return {
    title: `${capitalize(category)} - Terra Balance Enterprises`,
    description:
      "Browse our extensive catalog of farm products and services, available for order.",
  };
};

const CategorizedProducts = async ({ params }) => {
  const { category } = await params;

  const allProducts = productsData();

  const productsInCategory = allProducts.filter(
    (product) => product.category.toLowerCase() === category
  );

  return (
    <div className="mb-5">
      {/* Breadcrumb */}
      <div className="p-5 md:px-10">
        <MyBreadcrumb />
      </div>

      <div className="px-5 md:px-10 flex items-center justify-between">
        <h2>Product Catalog</h2>
        <p className="text-sm">
          Found <b>{productsInCategory?.length}</b> items
        </p>
      </div>
      <div className="product-cards-layout px-5 md:px-10">
        {productsInCategory?.map((product, idx) => (
          <div key={product.id}>
            <MyProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorizedProducts;
