import React from "react";
import { Roboto, Inter } from "@next/font/google";
import Image from "next/image";
import { Button } from "../ui/button";

const roboto = Inter({
  subsets: ["latin"],
  weight: ["500"], // Add weights as needed
  style: ["normal"], // Add styles as needed
});

export default function ImageProductSection({ data }: { data: TPetFoodData }) {
  return (
    <div className="w-full h-full flex flex-col justify-start">
      {/* <h1 className={`${roboto.className} text-lg mt-5`}>Poza Produs</h1> */}
      <Image
        src={data.imageUrl}
        className="w-[80%]  min-h-[70%] max-h-[70%] p-3 bg-primary-300 rounded-md mt-2"
        alt="Product-Image"
        width={50}
        height={50}
        quality={100} // Set the image quality (0–100)
        layout="responsive" // Makes the image responsive
        objectFit="cover"
      />
      <Button className="mt-5 relative rounded-[5px] text-main-600 bg-main-500 hover:bg-main-500/80">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-7 text-main-600 "
        >
          <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
        </svg>
        Adaugă in Coș
      </Button>
      <Button className="mt-2 text-main-600 hover:text-main-600/70 bg-main-800 hover:bg-main-800/80 rounded-[5px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
        </svg>
        Salvează Produsul
      </Button>

      <Button
        className={`bg-main-400 mt-4 rounded-[5px] border w-full mx-auto ${
          data.quantity > 0 ? "border-main-300" : "border-rose-500"
        } text-main-700 hover:bg-main-400 cursor-default`}
      >
        {data.quantity === 0
          ? "Stoc Indisponibil"
          : `Stoc Disponibil: ${data.quantity}`}
      </Button>
    </div>
  );
}
