import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import CartContextProvider from "./contexts/cart-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Silvidar",
  description: "Timisoara Pet-Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CartContextProvider>
        <body className={``}>{children}</body>
      </CartContextProvider>
    </html>
  );
}
