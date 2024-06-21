import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "India&#x27;s Top Commercial Real Estate Marketplace | PropReturns",
  description: "India&#x27;s Top Commercial Real Estate Marketplace | PropReturns",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={`${inter.className} `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
