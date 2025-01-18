import React from "react";
import { Button } from "./ui/button";

export default function HomeTopButtons() {
  return (
    <div className="flex gap-2 w-[97%] mx-auto">
      <Button>All</Button>
      <Button variant={"secondary"}>Sterile</Button>
    </div>
  );
}
