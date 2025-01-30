import MyBreadcrumb from "@/components/MyBreadcrumb";
import MyProductCard from "@/components/MyProductCard";
import { productsData } from "@/data/dataStore";

const CategorizedProducts = async ({ params }) => {
  const category = (await params).category;

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
      <div className="grid grid-cols-4 md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-5 px-5 md:px-10">
        {productsInCategory?.map((product, idx) => (
          <div key={product.id} className="col-span-2 md:col-span-1">
            <MyProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorizedProducts;
