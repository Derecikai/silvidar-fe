import React from "react";
import { Button } from "./ui/button";

export default function HomeTopButtons() {
  return (
    <div className="flex gap-2 xl:w-[97%]  mx-auto">
      <Button className="h-9">All</Button>

      <Button variant={"secondary"} className="bg-main-400">
        Sterile
      </Button>
      <Button variant={"secondary"} className="bg-main-400">
        Digestive
      </Button>
      <Button variant={"secondary"} className="bg-main-400">
        Pisici
      </Button>
    </div>
  );
}
