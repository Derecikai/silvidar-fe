import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../../styles/globals.css";
import MenuNav from "@/components/menunav";
import { Separator } from "@/components/ui/separator";
import ScrollContextProvider from "@/app/contexts/scrollbar-context";
import Footer from "@/components/footer";
import CartContextProvider from "@/app/contexts/cart-context";

export const metadata: Metadata = {
  title: "Silvidar - Produse",
  description: "Timisoara Pet-Shop",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en">
      <div>
        <ScrollContextProvider>
          <MenuNav />

          {children}
          <Separator className="absolute top-8 mt-9 w-[97%] ml-[5px] lg:ml-5 bg-zinc-200" />
          <Footer />
        </ScrollContextProvider>
      </div>
    </div>
  );
}
