import React from "react";
import { Inter, Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500"], // Add weights as needed
  style: ["normal"], // Add styles as needed
});

export default function CartDetails() {
  return (
    <section className="bg-white w-[99%] md:w-[95%] shadow-lg md:rounded-3xl h-[70%] mt-7">
      <div className="flex items-center justify-between gap-10 mt-5">
        <p
          className={`${roboto.className} self-start text-sm md:text-xl text-main-600 mt-2 pl-4 md:pl-7`}
        >
          Produs
        </p>
        <div className="min-w-fit md:min-w-[50%] flex items-center justify-between gap-3 md:gap-15 mr-14 ">
          <p
            className={`${roboto.className} self-start  text-sm md:text-xl text-main-600 mt-2 pl-7`}
          >
            Preț
          </p>
          <p
            className={`${roboto.className} self-start  text-sm md:text-xl text-main-600 mt-2 pl-7`}
          >
            Cantitate
          </p>
          <p
            className={`${roboto.className} self-start  text-sm md:text-xl text-main-600 mt-2 pl-7`}
          >
            Preț Final
          </p>
        </div>
      </div>
    </section>
  );
}
