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
import ProfileTabs from "@/components/PageComponents/tabs";
import ProfileButton from "@/components/PageComponents/dotsbutton";

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
    <section className="min-h-screen w-[100%] ">
      <div className=" w-[95%] rounded-md bg-[url('https://cdn.dribbble.com/userupload/17866919/file/original-e71ac48a568ab900f71e63b696a1fbd1.png')] bg-cover bg-center mx-auto mt-4 h-[100%] bg-main-800">
        <div className="w-[100%] rounded-md hidden lg:block h-[150px] "></div>
        <div className=" min-h-[200px] bg-main-800 backdrop-blur-md rounded-bl-md rounded-br-md flex flex-col md:flex-row items-center lg:justify-between gap-3 lg:gap-10">
          <section className="flex  mb-1 flex-col lg:flex-row justify-start ml-4 w-[100%] lg:w-[50%] h-[100%]">
            <div className=" mt-2 flex flex-col pl-3 border-l border-l-main-700/20 p-2 gap-4 ml-0 lg:ml-4 min-h-[140%]">
              {" "}
              <div className="flex items-center mb-3 w-[40%] gap-3">
                {" "}
                <Image
                  src={
                    "https://cdn.dribbble.com/userupload/14186754/file/original-1dd9f53abd2150102bdf09a3615a80d9.png?format=webp"
                  }
                  alt="profile-image"
                  className="rounded-[50%]  w-[60px] lg:w-[80px] h-[60px] lg:h-[80px]"
                  width={80}
                  height={50}
                />
                <h1
                  className={`${flo.className} text-base lg:text-3xl text-main-600`}
                >
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
                    <TooltipContent className="bg-blue-600/80">
                      <p>Sunte-ți un client frecvent</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="mt-auto flex gap-7">
                {/* <ProfileButton /> */}
                <Button className="h-5 bg-main-400 hover:bg-main-400/20 hover:text-main-600/60 text-main-600 border border-main-600/20">
                  Editează
                </Button>

                <Button
                  onClick={() => declineStatusAuth()}
                  className="border text-sm border-rose-600 bg-rose-500/40 hover:text-rose-400 hover:bg-main-800 text-rose-600"
                >
                  <p className="text-sm">Deconectare</p>
                </Button>
              </div>
            </div>
          </section>
          <div className=" h-[100%] gap-6 p-2 mb-2 lg:p-0 flex items-center border-l md:border-none border-l-main-600/20 ml-4 justify-start lg:justify-center w-[100%] lg:w-[40%]">
            <div className="ml-3 pr-5 border-r border-r-main-700/30">
              <h1
                className={`${flo.className} font-weight-500 text-base lg:text-lg text-main-600`}
              >
                Comenzi in total
              </h1>
              <p
                className={`${roboto.className} text-2xl lg:text-3xl text-blue-600/80 `}
              >
                0
              </p>
            </div>
            <div className="pr-2">
              <h1
                className={`${flo.className} font-weight-500 text-base lg:text-lg text-main-600`}
              >
                Produse Salvate
              </h1>
              <p
                className={`${roboto.className} text-2xl lg:text-3xl text-main-500 `}
              >
                0
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-main-800 mb-10 rounded-md h-[40%] w-[95%] mx-auto mt-3">
        <ProfileTabs />
      </div>
    </section>
  );
}
