import { Montserrat } from "next/font/google";
import "./globals.css";
import "./style.css"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Color Palette Generator",
  description: "Discover, create, and share beautiful color palettes for your projects. Perfect for designers, developers, and artists.",
  keywords: ["color palette", "color generator", "palette creator", "color schemes", "design tools", "web design", "UI/UX", "graphic design", "art", "developer tools"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}