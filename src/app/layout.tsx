import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { CartProvider } from "@/context/CartContext";
import ScrollAnimation from "@/components/ScrollAnimation";

export const metadata: Metadata = {
  title: "SARRLUXURY — The Definitive Style Destination",
  description: "Curated collections from Algiers. Viral sets, iconic abayas, and contemporary silhouettes designed for the global woman.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <CartProvider>
          <ScrollAnimation />
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
