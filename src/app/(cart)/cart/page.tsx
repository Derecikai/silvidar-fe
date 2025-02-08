import React from "react";
import { Inter } from "@next/font/google";
import CartDetails from "@/components/CartComponents/cartDetails";
import RightCartDetails from "@/components/CartComponents/right-cart-details";

const roboto = Inter({
  subsets: ["latin"],
  weight: ["500"], // Add weights as needed
  style: ["normal"], // Add styles as needed
});

export default function page() {
  return (
    <div className="w-[100%] min-h-screen flex flex-col md:flex-row">
      <div className="flex flex-col items-center min-w-[70%] bg-main-800">
        <h1 className={`${roboto.className} self-start pl-7 pt-7 text-3xl`}>
          Coșul Dumneavoastră
        </h1>
        <p
          className={`${roboto.className} self-start text-xl text-main-700/60 mt-2 pl-7`}
        >
          <span className="text-main-600/70 font-bold">2 Produse</span> in
          inventar
        </p>
        <CartDetails />
      </div>
      <div className=" min-w-[30%] bg-main-800 flex items-center justify-center">
        <section className="bg-white w-[85%] h-[90%] rounded-2xl">
          <RightCartDetails />
        </section>
      </div>
    </div>
  );
}
