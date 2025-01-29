import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function ButtonShop4({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Button className="bg-primary-300  h-[30px]  w-full md:w-fit text-main-700 hover:bg-primary-300  cursor-default rounded-[5px] shadow-md">
      {children}
    </Button>
  );
}
