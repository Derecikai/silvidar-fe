import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import CartContextProvider from "./contexts/cart-context";
import AccountContextProvider from "./contexts/account-context";

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
      <AccountContextProvider>
        <CartContextProvider>
          <body className={``}>{children}</body>
        </CartContextProvider>
      </AccountContextProvider>
    </html>
  );
}
