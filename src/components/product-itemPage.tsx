"use client";
import { Inter, Roboto, Roboto_Condensed } from "next/font/google";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const roboto = Inter({
  subsets: ["latin"],
  weight: ["400"], // Add weights as needed
  style: ["normal"], // Add styles as needed
});

const roboto2 = Roboto({
  subsets: ["latin"],
  weight: ["400"], // Add weights as needed
  style: ["normal"], // Add styles as needed
});

type ProductItemProps = {
  data: TPetFoodData;
};

export default function ProductItem({ data }: ProductItemProps) {
  return (
    <Link href={""} className={` rounded-md relative bg-white `}>
      <Image
        className="w-full bg-cover min-h-[330px]  rounded-md"
        src={data.imageUrl}
        alt="product-image"
        width={400} // Adjust this to the desired size
        height={300} // Adjust this to the desired size
        quality={100} // Set the image quality (0–100)
        layout="responsive" // Makes the image responsive
        objectFit="cover" // Ensure
      />
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-center justify-around w-full">
          <p
            className={`${roboto.className} text-main-600 text-[16px] mt-2 min-h-[30px]`}
          >
            {data.name}
          </p>

          <p
            className={`${roboto.className} text-main-700/80 text-[17px] text-sm`}
          >
            {data.price} RON
          </p>
        </div>

        {/* <Button
          variant={"secondary"}
          className={`${roboto2.className} bg-main-400 w-7 self-start mt-2 hover:border-main-500 hover:bg-main-400 border-main-400 border hover:cursor-pointer`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 22 22"
            strokeWidth={1.5}
            stroke="currentColor"
            className="text-main-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </Button> */}
      </div>
      <div className="absolute top-3 right-3 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-[40px] h-[40px] hover:cursor-pointer transition-transform transform hover:scale-110 hover:shadow-lg mb-2 hover:bg-main-800 bg-main-800/40 text-main-600 p-2 rounded-md backdrop:blur-md"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </div>{" "}
    </Link>
  );
}
