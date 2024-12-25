import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Silvidar - SignUp",
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
        className={`${inter.className} text-sm text-stone-900 min-h-screen bg-gradient-to-tr from-main-500 to-main-500/50 flex items-center `}
      >
        {children}
      </body>
    </html>
  );
}
