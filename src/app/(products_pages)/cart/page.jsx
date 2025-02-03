import Cart from "@/components/Cart";

export const generateMetadata = () => {
  return {
    title: "Shopping Cart - Terra Balance Enterprises",
    description:
      "View and manage the items in your shopping cart. Proceed to checkout when ready.",
  };
};

const CartPage = () => {
  return <Cart />;
};

export default CartPage;
