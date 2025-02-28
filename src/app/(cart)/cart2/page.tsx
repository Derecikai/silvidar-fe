"use client";
import { Button } from "@/components/ui/button";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";

const roboto = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400"], // Add weights as needed
  style: ["normal"], // Add styles as needed
});

const flo = Montserrat({
  subsets: ["latin"],
  weight: ["500"], // Add weights as needed
  style: ["normal"],
});

export default function page() {
  function formatDate(date: Date) {
    return date.toLocaleString("en-US", {
      weekday: "long",
      month: "long",
      day: "2-digit",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  }
  return (
    <div className=" min-h-screen lg:h-screen flex items-center justify-center w-[100%]">
      <div className="bg-gradient-to-br from-main-400 to-slate-600/40 h-[90%] rounded-md w-[80%] p-7">
        {/* First Part */}
        <div>
          <h1 className={`${flo.className} text-main-700 text-4xl mb-5`}>
            Instructiuni
          </h1>
          <p
            className={`${roboto.className} text-main-700/80 text-sm lg:text-xl`}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
            minus aliquid beatae quisquam iusto ullam repellat dolores, odit ut!
            Possimus recusandae, vitae, ex inventore voluptate cupiditate rerum
            earum, corporis illo excepturi totam. Nesciunt expedita atque error
            necessitatibus eos quam magni. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Molestiae perspiciatis sapiente
            blanditiis, eaque odio repellendus nihil! Reiciendis enim
            exercitationem, dolor quod, vitae qui soluta sit maxime ut voluptate
            non sunt. Dolor est, saepe corrupti, optio magnam amet sit
            distinctio cumque aperiam nihil cupiditate et ab obcaecati
            accusantium excepturi.
          </p>
        </div>
        {/* Second Part */}
        <div className="h-[220px] mt-16 flex flex-col gap-8 lg:flex-row items-center lg:justify-around">
          <Link href={"/cart3"}>
            <Button
              onClick={() => {
                const now = new Date();
                const formattedDate = formatDate(now);
                toast("Am notat alegera dumneavoastră", {
                  description: formatDate(now),
                  action: {
                    label: "Undo",
                    onClick: () => console.log("Undo"),
                  },
                });
              }}
              className="bg-main-600 hover:bg-main-600/80"
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
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <p className={`${roboto.className} text-main-800`}>
                Ridicare din magazin
              </p>
            </Button>
          </Link>
          <Button
            className="bg-main-700/20 hover:bg-main-700/20 cursor-default"
            variant={"secondary"}
          >
            La domiciliu (In curand)
          </Button>
        </div>
      </div>
    </div>
  );
}
