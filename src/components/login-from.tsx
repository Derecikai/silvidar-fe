import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import { Roboto } from "@next/font/google";
import Image from "next/image";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"], // Add weights as needed
  style: ["normal"], // Add styles as needed
});

export default function LoginForm() {
  return (
    <form
      className={`${roboto.className} flex flex-col items-center gap-5 mt-[15px] w-full p-3 lg:p-0 lg:w-[400px] h-full`}
    >
      <Image
        src="https://cdn.dribbble.com/userupload/12477296/file/original-88786eb81e1ed071676a6bb59207d481.png?format=webp&resize=640x480"
        alt="Preview of PetSoft"
        className={`rounded-2xl`}
        width={200}
        height={200}
      />
      <div className="w-full">
        <Label htmlFor="ownerName">Email</Label>
        <Input className="mt-2" id="ownerName"></Input>
      </div>

      <div className="w-full">
        <Label htmlFor="password">Parola</Label>
        <Input className="mt-2" type="password" id="password"></Input>
      </div>

      <Button className="w-full mt-[20px] bg-main-600 hover:bg-main-600/80">
        Login
      </Button>
      <p className="text-sm self-center text-main-700">
        Nu ai cont?{" "}
        <span className="italic text-center text-main-500">
          <Link href={"/"}>Creeaza aici</Link>
        </span>
      </p>
    </form>
  );
}
