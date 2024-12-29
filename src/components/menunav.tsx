"use client";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import Image from "next/image";
import MenuButtons from "./menu-buttons";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";

import { Roboto } from "@next/font/google";
import { useScrollContext } from "@/lib/hooks";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"], // Add weights as needed
  style: ["normal"], // Add styles as needed
});

export default function MenuNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isScrolled } = useScrollContext();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //Refactor Navbar (Pune un separator ca si border or something ca asa cv nu se poate cuh)

  return (
    <NavigationMenu
      className={`sticky top-0 bg-white h-[65px] flex items-center justify-between min-w-full  rounded-bl-md rounded-br-md ${
        isScrolled
          ? "transition-all ease-in-out bg-gradient-to-r from-main-500/60 to-main-900/80 h-[60px] "
          : ""
      }`}
    >
      <Image
        src=" https://cdn.dribbble.com/userupload/14490438/file/original-ded17d5d4d81cebd39b3370426f3665d.jpg"
        alt="Preview of PetSoft"
        className={`${isScrolled ? "ml-4" : "ml-4"} rounded-lg`}
        width={60}
        height={60}
      />

      <button
        className="absolute right-[140px] block lg:hidden p-2  rounded bg-main-800"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 7.5h16.5m-16.5 7.5h16.5"
          />
        </svg>
      </button>

      <MenuButtons action="dekstop" />

      <div className=" flex items-center gap-[10px] w-50px mr-6">
        <Link
          className="hover:bg-main-700 hover:text-white rounded-[9px] p-2 transition-colors duration-300 ease-in-out"
          href={"/signup"}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </Link>

        <Separator className="h-[20px]" orientation="vertical" />

        <Link
          className="hover:bg-main-500 hover:text-main-600 rounded-[9px] p-2 transition-colors duration-300 ease-in-out"
          href={"/profile"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </Link>
      </div>

      {isMenuOpen && (
        <div
          className={`absolute lg:hidden bg-white w-full top-[57px] rounded-md right-0 overflow-hidden transition-all duration-500 ease-in-out`}
          style={{
            maxHeight: isMenuOpen ? "200px" : "0px",
            opacity: isMenuOpen ? 1 : 0,
          }}
        >
          <MenuButtons action="mobile" />
        </div>
      )}
    </NavigationMenu>
  );
}
