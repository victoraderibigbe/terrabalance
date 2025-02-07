import Link from "next/link";
import NewsLetterForm from "../NewsLetterForm";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "#" },
    { title: "Our Services", path: "#" },
    { title: "Contact Us", path: "#" },
    { title: "Available Products", path: "/products" },
  ];

  const categories = [
    { title: "Goat", path: "/goat" },
    { title: "Rabbit", path: "/rabbit" },
    { title: "Turkey", path: "/turkey" },
    { title: "Catfish", path: "/catfish" },
    { title: "Pig", path: "/pig" },
    { title: "Snail", path: "/snail" },
    { title: "Chicken", path: "/chicken" },
    { title: "Egg", path: "/egg" },
    { title: "Plantain", path: "/plantain" },
    { title: "Cassava", path: "/cassava" },
    { title: "Corn", path: "/corn" },
  ];

  const socialMediaLinks = [
    { title: "Facebook", icon: FaFacebook, path: "#" },
    { title: "Instagram", icon: FaInstagram, path: "#" },
    { title: "X", icon: FaTwitter, path: "#" },
    { title: "LinkedIn", icon: FaLinkedin, path: "#" },
  ];

  return (
    <footer>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 px-5 py-10 md:px-10 lg:px-16 lg:py-16 bg-[#1F2937] text-neutralLight">
        <div>
          <NewsLetterForm />
        </div>
        <div>
          <h4>Quick Links</h4>
          <div>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link href={link.path}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h4>Product Categories</h4>
          <div>
            <ul>
              {categories.map((cat, idx) => (
                <li key={cat.title}>
                  <Link href={cat.path}>{cat.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h4>Connect with us</h4>
          <div>
            <ul>
              {socialMediaLinks.map((link) => (
                <li key={link.title}>
                  <Link href={link.path} className="flex items-center gap-2">
                    <link.icon /> {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-primaryBrown p-5">
        <p className="text-sm md:text-base text-white">
          &copy; {new Date().getFullYear()} Terra Balance. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
