"use client";
import Image from "next/image";
import React from "react";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import { Button } from "@/components/ui/button";
import { useAccountContext } from "@/lib/hooks";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useRouter } from "next/navigation";

const flo = Montserrat({
  subsets: ["latin"],
  weight: ["600"], // Add weights as needed
  style: ["normal"],
});

const roboto = Source_Sans_3({
  subsets: ["latin"],
  weight: ["500"], // Add weights as needed
  style: ["normal"], // Add styles as needed
});

export default function page() {
  const { declineStatusAuth, isAuth } = useAccountContext();
  const route = useRouter();
  if (!isAuth) {
    route.push("/login");
    return <p>Hello, you are not logged in</p>;
  }
  return (
    <section className="h-screen w-[100%] ">
      <div className=" w-[95%] rounded-md mx-auto mt-4 h-[60%] bg-main-800">
        <div className="w-[100%] rounded-md h-[45%] bg-gradient-to-t from-main-800 to-main-900/30"></div>
        <div className=" h-[55%] flex flex-col md:flex-row items-center justify-between gap-10">
          <section className="flex mb-1 flex-col md:flex-row justify-start ml-4 w-[50%] h-[100%]">
            <Image
              src={
                "https://cdn.dribbble.com/userupload/21003464/file/still-851c3a0cd8794713ba83c452f244de9f.png?format=webp&resize=640x480&vertical=center"
              }
              alt="profile-image"
              className="rounded-md"
              width={290}
              height={350}
            />
            <div className=" mt-2 flex flex-col pl-3 border-l border-l-main-700/20 p-2 gap-4 ml-3 h-[90%]">
              <div className="flex gap-2">
                <h1 className={`${flo.className} text-3xl text-main-600`}>
                  Asincronix
                </h1>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button className="bg-main-300 p-[6px] mt-[2px] h-[30px]  gap-[2px] cursor-default hover:bg-main-300">
                        TOP
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-4"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Sunte-ți un client frecvent</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <p
                className={`${roboto.className} text-lg max-w-[300px] text-main-600`}
              >
                admin@yahoo.com
              </p>
              <div className="mt-auto flex gap-10">
                <Button className="h-5 ">Editează</Button>
                <Button
                  onClick={() => declineStatusAuth()}
                  className="border border-rose-600 bg-main-800 hover:text-rose-400 hover:bg-main-800 text-rose-600"
                >
                  LogOut
                </Button>
              </div>
            </div>
          </section>
          <div className=" h-[100%] gap-6 flex items-center justify-center w-[40%]">
            <div className=" pr-5 border-r border-r-main-700/30">
              <h1
                className={`${flo.className} font-weight-500 text-2xl text-main-600`}
              >
                Comenzi in total
              </h1>
              <p className={`${roboto.className} text-5xl text-main-300 `}>
                452
              </p>
            </div>
            <div className="pr-2">
              <h1
                className={`${flo.className} font-weight-500 text-2xl text-main-600`}
              >
                Comenzi Salvate
              </h1>
              <p className={`${roboto.className} text-5xl text-main-500 `}>
                45
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-main-800 rounded-md h-[40%] w-[95%] mx-auto mt-3"></div>
    </section>
  );
}
