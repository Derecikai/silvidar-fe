import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import { Roboto } from "@next/font/google";
import { Separator } from "./ui/separator";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"], // Add weights as needed
  style: ["normal"], // Add styles as needed
});

export default function SignUpForm() {
  return (
    <form
      className={`${roboto.className} flex flex-col gap-5 mt-[15px] w-full p-3 lg:p-0 lg:w-[400px] h-full`}
    >
      <div>
        <Label htmlFor="name">Nume</Label>
        <Input className="mt-2" id="name"></Input>
      </div>

      <div>
        <Label htmlFor="ownerName">Email</Label>
        <Input className="mt-2" id="ownerName"></Input>
      </div>

      <div>
        <Label htmlFor="password">Parola</Label>
        <Input className="mt-2" type="password" id="password"></Input>
      </div>

      <div>
        <Label htmlFor="confirmPassword">Confirmă Parola</Label>
        <Input className="mt-2" type="password" id="confirmPassword"></Input>
      </div>
      <Button className="tracking-wider w-full mt-[20px] bg-main-600 hover:bg-main-600/80">
        Creează
      </Button>
      <Separator className="bg-zinc-200" />
      <p className="text-sm self-center text-main-700">
        Ai deja cont,{" "}
        <span className="italic text-center text-main-500">
          <Link href={"/login"}> login aici</Link>
        </span>
      </p>
    </form>
  );
}
