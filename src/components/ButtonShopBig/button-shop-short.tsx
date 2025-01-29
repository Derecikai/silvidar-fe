import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function ButtonShop3({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Button className="bg-main-300/40  h-[30px]  w-full md:w-fit text-main-700 hover:bg-main-300/40  cursor-default rounded-[5px] shadow-md">
      {children}
    </Button>
  );
}
