import { Roboto, Merriweather } from "next/font/google";
import "./globals.css";
import ClientProvider from "@/providers/ClientProvider";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import CategoriesNav from "@/components/CategoriesNav";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export const metadata = {
  title: "Terra Balance Enterprises",
  description:
    "Shop our farm products and services, we are always available for your order.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${merriweather.variable} antialiased`}
      >
        <ClientProvider>
          <Sidebar />
          <Navbar />
          <CategoriesNav />
          {children}
          <Footer />
        </ClientProvider>
      </body>
    </html>
  );
}
