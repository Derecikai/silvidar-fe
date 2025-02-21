"use client";
import Image from "next/image";
import React from "react";
type TCartMobile = {
  data: TCartQuantity;
};

import { Roboto } from "next/font/google";

import { useCartContext } from "@/lib/hooks";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500"],
  style: ["normal"],
});

export default function CartMobile({ data }: TCartMobile) {
  const { increaseCardItem } = useCartContext();
  return (
    <div className="w-[100%] my-2 h-[45%] bg-red-500 flex gap-1">
      <div className="w-[30%] h-[100%] bg-slate-500 p-2">
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
        <div className="flex items-center bg-violet-800  min-w-[100%] h-[20%] mt-2">
          <button
            onClick={() => {
              increaseCardItem(data.id, "delete");
            }}
            className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] bg-slate-500/20 hover:bg-slate-200 rounded-md mr-2"
          >
            <p className="pb-2">-</p>
          </button>
          <p className={`${roboto.className} text-sm md:text-lg text-main-600`}>
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
      </div>
      <div className="bg-blue-500">saas</div>
    </div>
  );
}
