"use client";
import React from "react";
import { Inter } from "@next/font/google";
import CartDetails from "@/components/CartComponents/cartDetails";
import RightCartDetails from "@/components/CartComponents/right-cart-details";
import { useCartContext } from "@/lib/hooks";
import { Separator } from "@/components/ui/separator";
import CartSteps from "@/components/cartsteps";

const roboto = Inter({
  subsets: ["latin"],
  weight: ["500"], // Add weights as needed
  style: ["normal"], // Add styles as needed
});

export default function page() {
  const { cartData } = useCartContext();
  return (
    <div className="w-[100%]  min-h-screen flex flex-col lg:flex-row">
      <div className="flex flex-col items-center min-w-[70%] bg-main-800">
        {/* Top Part */}
        <div className="flex items-center md:justify-between w-[95%] flex-col gap-[1rem] md:flex-row ">
          <div className="w-[100%] md:w-[50%] ml-2 md:ml-0 lg:md-0">
            <h1 className={`${roboto.className} text-2xl pt-7 md:text-3xl`}>
              Coșul dumneavoastră
            </h1>

            <p
              className={`${roboto.className} text-lg md:text-xl text-main-700/60 `}
            >
              <span className="text-main-600/70 font-bold">
                {cartData.length} Produse
              </span>{" "}
              in inventar
            </p>
          </div>
          <CartSteps />
        </div>
        <CartDetails />
      </div>
      <div className=" min-w-[100%] lg:min-w-[30%] bg-main-800 flex items-center justify-center my-5 md:my-0">
        <section className="bg-white  w-[100%] lg:w-[74%] h-[93%] rounded-2xl">
          <RightCartDetails />
        </section>
      </div>
    </div>
  );
}
