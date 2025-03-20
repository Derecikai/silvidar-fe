"use client";
import Image from "next/image";
import React from "react";
type TCartMobile = {
  data: TCartQuantity;
};

import { Roboto, Source_Sans_3 } from "next/font/google";

import { useCartContext } from "@/lib/hooks";

const roboto = Source_Sans_3({
  subsets: ["latin"],
  weight: ["500"],
  style: ["normal"],
});

export default function CartMobile({ data }: TCartMobile) {
  const { increaseCardItem } = useCartContext();
  return (
    <div className="w-[100%] my-2 h-[45%] border-b-main-700/20 border-b flex gap-1 p-1">
      <div className="w-[30%] h-[100%] relative p-2">
        <Image
          className="bg-cover min-w-[100%] max-w-[100%] min-h-[77%] max-h-[77%] rounded-md"
          src={data.imageUrl}
          alt="product-cart-image"
          width={50}
          height={50}
          quality={100}
          layout="responsive"
          objectFit="cover"
        />
        <div
          className={`${roboto.className} absolute flex items-center justify-center text-sm text-white bottom-12 md:bottom-16 w-[70%] h-[15%] rounded-tr-md rounded-br-md bg-zinc-900 backdrop-blur-md`}
        >
          <p className="line-height: 1rem text-[11px] md:text-lg">-15% EXTRA</p>
        </div>
        <div className="flex justify-between items-center border-main-700/30 border rounded-md min-w-[100%] h-[20%] mt-2">
          <button
            onClick={() => {
              increaseCardItem(data.id, "delete");
            }}
            className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] flex items-center justify-center rounded-md mr-2"
          >
            <p className="pl-2 pb-2 text-xl">-</p>
          </button>
          <p
            className={`${roboto.className} text-base md:text-lg text-main-600`}
          >
            {data.cartQuantity}
          </p>
          <button
            onClick={() => {
              increaseCardItem(data.id, "add");
            }}
            className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] flex items-center justify-center rounded-md mr-2"
          >
            <p className="pl-2 pb-2 text-xl">+</p>
          </button>
        </div>
      </div>
      <div className="pt-4 ml-1 min-w-[37%] max-w-[37%] ">
        <p className={`${roboto.className} text-sm md:base text-main-700/75`}>
          {data.animalType
            .toUpperCase()
            .replace(/_/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase())}
        </p>
        <p
          className={`${roboto.className} text-lg md:text-base max-w-[190px] text-main-600`}
        >
          {data.name}
        </p>
        <p
          className={`${roboto.className} mt-4 text-base md:text-lg text-main-600`}
        >
          {data.price} RON/buc
        </p>
        {/* <p
          className={`${roboto.className} mt-10 text-xs md:text-sm text-main-700/60`}
        >
          Vandut de Versele-Laga
        </p> */}
      </div>
      <div className=" flex items-end justify-end  w-[30%]">
        <p
          className={`${roboto.className} mt-20 text-xl  pb-1 pr-1 text-main-600`}
        >
          {" "}
          {data.price * data.cartQuantity} RON
        </p>
      </div>
    </div>
  );
}
