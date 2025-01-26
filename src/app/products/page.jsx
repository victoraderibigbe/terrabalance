import MyBreadcrumb from "@/components/MyBreadcrumb";
import MyProductCard from "@/components/MyProductCard";
import { productsData } from "@/data/dataStore";

const ProductsPage = () => {
  const products = productsData();

  return (
    <div>
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
  );
};

export default ProductsPage;
