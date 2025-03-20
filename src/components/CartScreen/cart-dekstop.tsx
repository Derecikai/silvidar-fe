"use client";
import { Roboto, Source_Sans_3 } from "next/font/google";
import Image from "next/image";
import React from "react";
import { useCartContext } from "@/lib/hooks";

const roboto = Source_Sans_3({
  subsets: ["latin"],
  weight: ["500"], // Add weights as needed
  style: ["normal"], // Add styles as needed
});

type TCartItem = {
  data: TCartQuantity;
  screen?: "dekstop" | "mobile";
};

export default function CartDekstop({ data }: TCartItem) {
  const { increaseCardItem } = useCartContext();
  return (
    <div className="flex w-[100%] items-center mt-2 px-3 hover:bg-main-400 backdrop-blur-md border-b-main-700/20 border-b h-[28%] p-3 justify-between gap-10">
      {/* Yellow Background Element (Produs Section) */}
      <div className="flex w-[40%] h-[100%] ">
        <Image
          className="bg-cover min-w-[58%] max-w-[58%] md:min-h-[100%] md:min-w-[20%] md:max-w-[30%] rounded-md"
          src={data.imageUrl}
          alt="product-cart-image"
          width={50}
          height={50}
          quality={100}
          layout="responsive"
          objectFit="cover"
        />

        <div className="flex flex-col w-[100%] ml-3">
          <p
            className={`${roboto.className} text-xs md:text-base text-main-700/75`}
          >
            {data.animalType
              .toUpperCase()
              .replace(/_/g, " ")
              .replace(/\b\w/g, (char) => char.toUpperCase())}
          </p>
          <p
            className={`${roboto.className} text-xs md:text-lg mt-1 min-w-[90px] text-main-600`}
          >
            {data.name}
          </p>
        </div>
      </div>

      {/* Slate Background Element (Preț, Cantitate, Preț Final Section) */}
      <div className="flex items-center min-w-[20%]  md:min-w-[47%] md:max-w-[45%] gap-14 md:mx-auto md:justify-between md:gap-15">
        <p className={`${roboto.className} text-sm md:text-xl text-main-600`}>
          {data.price} RON
        </p>
        <div className="flex items-center ">
          <button
            onClick={() => {
              increaseCardItem(data.id, "delete");
            }}
            className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] bg-slate-500/20 hover:bg-slate-200 rounded-md mr-2"
          >
            -
          </button>
          <p className={`${roboto.className} text-sm md:text-xl text-main-600`}>
            {data.cartQuantity}
          </p>
          <button
            onClick={() => {
              increaseCardItem(data.id, "add");
            }}
            className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] bg-slate-500/20 rounded-md ml-2 hover:bg-slate-200"
          >
            +
          </button>
        </div>
        <p
          className={`${roboto.className} text-sm md:text-xl min-w-[100px] text-main-600`}
        >
          {data.price * data.cartQuantity} RON
        </p>
      </div>
    </div>
  );
}
