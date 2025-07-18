"use client";
import { usePetDataContext } from "@/lib/hooks";
import { Inter, Source_Sans_3 } from "next/font/google";
import React from "react";

const roboto = Inter({
  subsets: ["latin"],
  weight: ["400"], // Add weights as needed
  style: ["normal"], // Add styles as needed
});

export default function ProductsNumber() {
  const { foodLength } = usePetDataContext();

  return (
    <div>
      {" "}
      <p className={`${roboto.className} ml-2 text-[15px] text-main-600`}>
        {foodLength}{" "}
        <span className="text-[15px] text-main-600 "> PRODUSE</span>
      </p>
    </div>
  );
}
