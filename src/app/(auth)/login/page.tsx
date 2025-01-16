"use client";
import SignUpForm from "@/components/signup-form";
import React from "react";

import { Roboto } from "@next/font/google";
import LoginForm from "@/components/login-from";
import { Separator } from "@/components/ui/separator";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"], // Add weights as needed
  style: ["normal"], // Add styles as needed
});

export default function SignUp() {
  console.log(roboto.className);

  return (
    <div className="bg-gradient-to-tr from-main-800 to-white shadow-lg flex flex-col  items-center rounded-xl w-[97%] lg:w-[500px] my-auto mx-auto h-[600px]">
  
        <h1
          className={`${roboto.className} mt-[40px] mb-4 text-center text-3xl text-main-600 `}
        >
          Conectează-te
        </h1>
        
  
      <LoginForm />
    </div>
  );
}
