import { Roboto, Merriweather } from "next/font/google";
import "./globals.css";

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
  title: "Terra Balance",
  description:
    "Empower African Smallholder Farmers Through Cutting-edge Technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${merriweather.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
