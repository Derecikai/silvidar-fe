"use client";
import React, { useState } from "react";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"], // Add weights as needed
  style: ["normal"], // Add styles as needed
});

export default function Searchbar() {
  const [searchText, setSearchText] = useState("");

  return (
    <form
      className={`${roboto.className} border-[2px] focus:border-main-500 hover:border-main-500 bg-main-800 focus:bg-secondary-1 w-[100%]  h-[50px] flex rounded-xl`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 mt-3 ml-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>

      <input
        className="w-full h-full bg-main-800 px-5 outline-none trasnsition focus:bg-main-800 hover:bg-primary-700bg-primary-700 placeholder:text-neutral-900 rounded-[6px] text-[16px]  text-neutral-900 "
        type="search"
        placeholder="Caută produse"
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        value={searchText}
      />
      <div className="w-[50px]"></div>
    </form>
  );
}
