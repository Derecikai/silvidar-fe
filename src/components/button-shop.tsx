import React from "react";
import { Button } from "./ui/button";

export default function ButtonShop({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Button className="flex justify-start bg-primary-300 w-[100%] text-left mx-auto text-main-700 hover:bg-primary-300 cursor-default rounded-[5px] shadow-md">
      {children}
    </Button>
  );
}
