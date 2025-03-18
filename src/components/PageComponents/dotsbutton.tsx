import React from "react";
import { Button } from "../ui/button";

export default function ProfileButton() {
  return (
    <Button
      asChild
      variant={"secondary"}
      className="rounded-[50%] border hover:cursor-pointer bg-main-800 h-[45px] w-[45px] border-main-600/20"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-[17px] h-[1px] p-0"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
    </Button>
  );
}
