"use client";
import { Inter } from "@next/font/google";
import CartDetails from "@/components/CartComponents/cartDetails";
import RightCartDetails from "@/components/CartComponents/right-cart-details";
import { useCartContext } from "@/lib/hooks";
import { Separator } from "@/components/ui/separator";

const roboto = Inter({
  subsets: ["latin"],
  weight: ["500"], // Add weights as needed
  style: ["normal"], // Add styles as needed
});
export default function CartSteps() {
  return (
    <div className=" flex items-center w-[100%] md:w-[50%] justify-center  mx-auto pt-2 md:pt-10">
      <button
        className={`${roboto.className} w-[47px] h-[47px] text-main-800 border-main-700/20 border bg-blue-600/80 rounded-[50%] cursor-default`}
      >
        1
      </button>
      <Separator className="w-[27%] md:w-[35%] bg-main-700/40" />
      <button
        className={`${roboto.className} w-[47px] h-[47px] text-main-700 border-main-700/20 border bg-white rounded-[50%] cursor-default`}
      >
        2
      </button>
      <Separator className="w-[27%] md:w-[35%] bg-main-700/40" />
      <button
        className={`${roboto.className} w-[47px] h-[47px] text-main-700 border-main-700/20 border bg-white rounded-[50%] cursor-default`}
      >
        3
      </button>
    </div>
  );
}
