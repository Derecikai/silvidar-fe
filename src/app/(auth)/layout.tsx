import AuthLayout from "@/components/auth-layout";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Silvidar - SignUp",
  description: "Timisoara Pet-Shop",
};

// bg-gradient-to-tr from-main-500/60 to-main-700/20
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthLayout>{children}</AuthLayout>
      </body>
    </html>
  );
}
