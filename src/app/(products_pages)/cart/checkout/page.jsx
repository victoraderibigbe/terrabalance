import MyBreadcrumb from "@/components/MyBreadcrumb";

export const generateMetadata = () => {
  return {
    title: "Checkout - Terra Balance Enterprises",
    description:
      "Proceed to checkout to complete your purchase of farm products and services.",
  };
};

const CheckoutPage = () => {
  return (
    <div className="p-5 md:px-10">
      {/* Breadcrumb */}
      <MyBreadcrumb />
    </div>
  );
};

export default CheckoutPage;
