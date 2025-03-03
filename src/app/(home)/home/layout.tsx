import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../../styles/globals.css";
import MenuNav from "@/components/menunav";
import { Separator } from "@/components/ui/separator";
import ScrollContextProvider from "@/app/contexts/scrollbar-context";
import FilterAreaMobile from "@/components/filter-area-mobile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Silvidar - Produse",
  description: "Timisoara Pet-Shop",
};

export default function RootLayout({
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
        </ScrollContextProvider>
      </div>
    </div>
  );
}
