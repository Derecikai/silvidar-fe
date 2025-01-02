import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import FilterArea from "./filter-area";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"], // Add weights as needed
  style: ["normal"], // Add styles as needed
});
export default function FilterAreaMobile() {
  return (
    <Sheet>
      <SheetTrigger className=" sticky top-20 max-w-[42px]  lg:hidden bg-main-800 p-2 rounded-lg hover:cursor-pointer mr-10 border-[2px] border-main-500 hover:border-main-900">
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
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
          />
        </svg>
      </SheetTrigger>
      <SheetContent
        className={`${roboto.className}w-[89%] bg-main-400 lg:hidden`}
        side={"left"}
      >
        <SheetHeader>
          <SheetTitle
            className={`${roboto.className} tracking-wide text-center text-main-700`}
          >
            FILTRU
          </SheetTitle>
          <SheetDescription>
            <FilterArea />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
