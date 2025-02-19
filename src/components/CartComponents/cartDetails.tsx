"use client";
import React from "react";
import { Inter, Roboto } from "next/font/google";
import { useCartContext } from "@/lib/hooks";
import CartItem from "./cart-item";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500"], // Add weights as needed
  style: ["normal"], // Add styles as needed
});

export default function CartDetails() {
  const { cartData, isLoading } = useCartContext();
  console.log("THIS IS CARTDATA:::::::", cartData);
  return (
    <section className="bg-white overflow-y-auto w-[99%] md:w-[95%] shadow-lg md:rounded-3xl h-[400px] md:h-[526px] mt-7">
      <div className="flex  w-[100%] mt-5 px-3  md:mx-auto justify-between gap-10">
        {/* AICI SUS */}
        <p
          className={`${roboto.className} text-left self-start text-sm md:w-[40%]  md:text-xl text-main-600 mt-2 `}
        >
          Produs
        </p>
        <div className="flex  items-center min-w-fit  md:min-w-[45%] md:max-w-[45%] gap-14 md:justify-between md:gap-15  md:mx-auto ">
          <p
            className={`${roboto.className} self-start ml-3 text-sm md:text-xl text-main-600 mt-2 `}
          >
            Preț
          </p>
          <p
            className={`${roboto.className} ml-5 self-start  text-sm md:text-xl text-main-600 mt-2 `}
          >
            Cantitate
          </p>
          <p
            className={`${roboto.className} self-start  text-sm md:text-xl text-main-600 mt-2 `}
          >
            Preț Final
          </p>
        </div>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        cartData.map((item) => <CartItem key={item.id} data={item} />)
      )}
    </section>
  );
}
