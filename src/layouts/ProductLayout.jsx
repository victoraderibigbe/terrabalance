import CategoriesNav from "@/components/CategoriesNav";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const ProductLayout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <CategoriesNav />
      {children}
      <Footer />
    </div>
  );
};

export default ProductLayout;
