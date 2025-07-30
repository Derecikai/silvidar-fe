"use client";
import { Columns3, Columns4, Grid2x2, ListFilter } from "lucide-react";
import { useState } from "react";
import { Separator } from "../ui/separator";
import FilterAndSort from "./filterAndSort";
import { useScrollContext } from "@/lib/hooks";

type TLayoutButton = "big" | "small" | null;

export default function LayoutButtons() {
  const { changeLayout } = useScrollContext();

  const [selectedButton, isSelectedButton] = useState<TLayoutButton>("big");

  return (
    <div className="flex gap-4 mr-15">
      <button
        className={`${
          selectedButton === "big"
            ? "text-main-700 transition-colors duration-300 ease-in-out"
            : "text-main-700/40"
        } `}
        onClick={() => {
          isSelectedButton("big");
          changeLayout();
        }}
      >
        <Grid2x2 size={21} />
      </button>
      <button
        onClick={() => {
          isSelectedButton("small");
          changeLayout();
        }}
        className={`${
          selectedButton === "small"
            ? "text-main-700 transition-colors duration-300 ease-in-out"
            : "text-main-700/40"
        } `}
      >
        {" "}
        <Columns4 size={21} />
      </button>
      <Separator
        orientation="vertical"
        className="h-[24px] mt-1 bg-main-700/20"
      />
      <FilterAndSort />
    </div>
  );
}
