"use client";
import { Inter, Roboto } from "next/font/google";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { CartContext } from "@/app/contexts/cart-context";
import { useCartContext } from "@/lib/hooks";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500"], // Add weights as needed
  style: ["normal"], // Add styles as needed
});

type TCartItem = {
  data: TCartQuantity;
};

export default function CartItem({ data }: TCartItem) {
  const { increaseCardItem } = useCartContext();

  return (
    <div className="flex w-[96%] items-center justify-between gap-10 mt-2 mx-auto  backdrop-blur-md bg-white/60 border-b-main-700/20 border-b h-[30%] p-3">
      <div className="flex flex-col md:flex-row w-[40%] h-[100%] ">
        <Image
          className="bg-cover min-h-[100%] min-w-[20%] max-w-[30%] rounded-md"
          src={data.imageUrl}
          alt="product-cart-iamge"
          width={50}
          height={50}
          quality={100} // Set the image quality (0–100)
          layout="responsive" // Makes the image responsive
          objectFit="cover"
        />

        <div className="flex flex-col ml-3">
          <p className={`${roboto.className} text-sm  text-main-700/75`}>
            {data.animalType
              .toUpperCase() // Convert the entire string to lowercase
              .replace(/_/g, " ") // Replace all underscores with spaces
              .replace(/\b\w/g, (char) => char.toUpperCase())}
          </p>
          <p className={`${roboto.className} text-base mt-1 text-main-600`}>
            {data.name}
          </p>
        </div>
      </div>
      <div className="min-w-[50%] flex gap-2 ml-5 justify-between">
        <p className={`${roboto.className} text-lg  text-main-600`}>
          {data.price}
        </p>
        <div className="flex items-center">
          <button
            onClick={() => {
              increaseCardItem(data.id, "delete");
            }}
            className="w-[40px] bg-slate-500/20 hover:bg-slate-200 rounded-md h-[40px] mr-2"
          >
            -
          </button>
          <p className={`${roboto.className} text-lg  text-main-600`}>
            {data.cartQuantity}
          </p>
          <button
            onClick={() => {
              increaseCardItem(data.id, "add");
            }}
            className="w-[40px] bg-slate-500/20 rounded-md h-[40px] ml-2 hover:bg-slate-200"
          >
            +
          </button>
        </div>
        <p className={`${roboto.className} text-lg  text-main-500`}>
          {data.price * data.cartQuantity} RON
        </p>
      </div>
      <p></p>
    </div>
  );
}
