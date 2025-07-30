import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../../styles/globals.css";
import MenuNav from "@/components/menunav";
import { Separator } from "@/components/ui/separator";
import ScrollContextProvider from "@/app/contexts/scrollbar-context";
import Footer from "@/components/footer";
import Navbar2 from "@/components/NewNavBar/navbar2";

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
          <Separator className="w-[98%] mx-auto bg-main-700/20" />
          {children}

          <Footer />
        </ScrollContextProvider>
      </div>
    </div>
  );
}
