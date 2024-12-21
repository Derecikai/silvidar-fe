import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../../styles/globals.css";
import MenuNav from "@/components/menunav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shopping",
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
        className={`${inter.className} bg-white text-sm text-stone-900 flex flex-col max-w-full mx-auto px-4 min-h-screen`}
      >
        <MenuNav />
        {children}
      </body>
    </html>
  );
}
