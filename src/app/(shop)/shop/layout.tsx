import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../../styles/globals.css";
import MenuNav from "@/components/menunav";
import { Separator } from "@/components/ui/separator";
import ScrollContextProvider from "@/app/contexts/scrollbar-context";

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
    <html lang="en">
      <body
        className={`${inter.className} relative text-sm text-stone-900 flex flex-col min-w-full mx-auto px-4 min-h-screen`}
      >
        <ScrollContextProvider>
          <MenuNav />
        </ScrollContextProvider>
        {children}
        <Separator className="absolute top-8 mt-9 w-[97%] ml-[5px] lg:ml-5 bg-zinc-200" />
      </body>
    </html>
  );
}
