"use client";
import React, { useEffect, useState } from "react";
import { Inter, Roboto, Source_Sans_3 } from "next/font/google";
import { useCartContext } from "@/lib/hooks";
import CartItem from "./cart-item";
import { useMediaQuery } from "react-responsive";
import "../../styles/globals.css";

const roboto = Source_Sans_3({
  subsets: ["latin"],
  weight: ["500"], // Add weights as needed
  style: ["normal"], // Add styles as needed
});

export default function CartDetails() {
  const { cartData, isLoading } = useCartContext();
  const [isMobile, setIsMobile] = useState(false); // Initialize with a default value
  const isMobileQuery = useMediaQuery({ query: "(max-width: 1023px)" });

  useEffect(() => {
    // Update isMobile state after component mounts (client-side only)
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  console.log("THIS IS CARTDATA:::::::", cartData);

  return (
    <section className=" custom-scrollbar overflow-y-auto w-[99%] md:w-[95%] shadow-lg md:rounded-3xl h-[400px] md:h-[526px] mt-7">
      {!isMobile && (
        <div className="flex items-center bg-slate-300/30  min-h-[12%] rounded-tr-md rounded-tl-md w-[100%] px-3  md:mx-auto justify-between gap-10">
          {/* AICI SUS */}
          <p
            className={`${roboto.className} text-sm md:w-[40%]  md:text-2xl text-main-600 mt-2 `}
          >
            Produs
          </p>
          <div className="flex items-center min-w-fit  md:min-w-[45%] md:max-w-[45%] gap-14 md:justify-between md:gap-15  md:mx-auto ">
            <p
              className={`${roboto.className} self-start ml-3 text-sm lg:text-xl text-main-600 mt-2 `}
            >
              Preț
            </p>
            <p
              className={`${roboto.className} ml-5 self-start  text-sm lg:text-xl text-main-600 mt-2 `}
            >
              Cantitate
            </p>
            <p
              className={`${roboto.className} self-start  text-sm lg:text-xl text-main-600 mt-2 `}
            >
              Preț Final
            </p>
          </div>
        </div>
      )}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        cartData.map((item) => (
          <CartItem
            key={item.id}
            data={item}
            screen={isMobile ? "mobile" : "dekstop"}
          />
        ))
      )}
    </section>
  );
}
