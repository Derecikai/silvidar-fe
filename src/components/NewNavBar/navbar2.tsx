import React from "react";

export default function Navbar2() {
  return (
    <div className="relative w-[98%] h-[100%] mx-auto flex justify-center bg-secondary-4 backdrop-blur-md rounded-b-3xl px-6 py-4">
      <div className="absolute text-sm h-[80%] w-[36%] items-center rounded-tl-3xl left-0 flex gap-12 px-6 pl-14 pt-7  bg-secondary-3 text-main-600 top-5 font-medium rounded-tr-3xl z-10">
        <a href="/home" className="hover:text-main-600/30 ">
          HOME
        </a>
        <a href="/shop" className="hover:text-main-600/30 ">
          MAGAZIN
        </a>
        <a href="#" className="hover:text-main-600/30 ">
          WOMEN
        </a>
        <a href="#" className="hover:text-main-600/30 ">
          ACTIONS
        </a>
        <div className="absolute bg-secondary-3 w-[86px] h-[40px] z-50 left-[520px] rotate-45 top-[27px]"></div>
      </div>

      <div className="text-black px-8 py-2 mt-2 rounded-full z-20 relative">
        <span className="font-bold tracking-widest text-lg">SILVIDAR</span>
      </div>

      <div className="absolute right-0 top-5 w-[36%] h-[80%] items-center flex gap-12 px-6 py-2 bg-secondary-3 text-sm pl-12 text-main-600 font-medium rounded-tr-3xl rounded-tl-3xl z-10 pt-7">
        <a href="#">SEASONAL</a>
        <a href="#">ACCESSORIES</a>
        <button className="bg-white text-black rounded-full p-3">
          SIGN IN / UP
        </button>
        <div className="absolute bg-secondary-3 w-[86px] h-[40px] z-50 right-[519px] -rotate-45 top-[27px]"></div>
      </div>
    </div>
  );
}
