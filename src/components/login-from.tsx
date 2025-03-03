"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import { Roboto } from "@next/font/google";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { loginFormSchema, TloginFormSchema } from "@/lib/validations";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"], // Add weights as needed
  style: ["normal"], // Add styles as needed
});

export default function LoginForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TloginFormSchema>({ resolver: zodResolver(loginFormSchema) });

  const onSubmit = async (data: TloginFormSchema) => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8080/api/v1/auth/authenticate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error("Login failed");
      } else {
        const result: TAuthResponse = await response.json();
        console.log("Login Succsesfull,data is : ", result.token);
      }
    } catch (error) {
      console.log("Error happend", error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${roboto.className} font-sans font-light flex flex-col items-center gap-5 mt-[15px] w-full p-3 lg:p-0 lg:w-[400px] h-full`}
    >
      <Image
        src="https://cdn.dribbble.com/userupload/12477296/file/original-88786eb81e1ed071676a6bb59207d481.png?format=webp&resize=640x480"
        alt="Preview of PetSoft"
        className={`rounded-2xl`}
        width={200}
        height={100}
      />

      <div className="w-full">
        <Label htmlFor="ownerName">Email</Label>
        <Input className="mt-2" id="email" {...register("email")}></Input>
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>

      <div className="w-full">
        <Label htmlFor="password">Parola</Label>
        <Input
          className="mt-2"
          type="password"
          id="password"
          {...register("password")}
        ></Input>
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}
      </div>

      <Button className=" tracking-wider w-full mt-[20px] bg-main-600 hover:bg-main-600/80">
        Conectează-te
      </Button>
      <Separator className="bg-zinc-200" />
      <p className="text-sm self-center text-main-700">
        Nu ai cont?{" "}
        <span className="italic text-center text-main-500">
          <Link href={"/"}>Creeaza aici</Link>
        </span>
      </p>
    </form>
  );
}
