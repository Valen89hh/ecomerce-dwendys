import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// My components
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "D-wendys",
  description: "Tienda virtual D-wendys",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
