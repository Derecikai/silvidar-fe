import React from "react";
import { Inter, Roboto } from "next/font/google";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import ButtonShop2 from "../ButtonShopBig/button-shop2";
import { Input } from "../ui/input";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500"], // Add weights as needed
  style: ["normal"], // Add styles as needed
});

export default function RightCartDetails() {
  return (
    <section className="flex flex-col justify-center">
      <div className="flex flex-1 flex-col justify-center gap-4">
        <h1 className={`${roboto.className} text-xl p-4`}>
          Selectează Locația
        </h1>
        <Select>
          <SelectTrigger className="w-[92%] mx-auto rounded-xl border-none">
            <SelectValue placeholder="Alege firma" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Firme</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[92%] mx-auto rounded-xl border-none">
            <SelectValue placeholder="Alege firma" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Firme</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button className="w-[92%] mx-auto mt-2 rounded-xl ">
          Completeaza Data
        </Button>
      </div>

      <Separator className="bg-main-700/20 w-[92%] mx-auto mt-5" />

      <div className="flex-1">
        <h1 className={`${roboto.className} text-xl pl-4 pt-4`}>
          Coduri Cupon
        </h1>
        <p className="text-sm text-main-700/60 w-[92%] mx-auto mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
          distinctio minima sed beatae velit, doloribus laborum tempora nostrum
          accusamus quidem, adsad eeq asda petui salam stuki sarna asstr tyter
        </p>
        <Input
          className="mt-4 w-[92%] mx-auto"
          defaultValue={"Introduceti Cod"}
        />
      </div>
      <div className="flex-1">
        <div className="h-[100%] bg-main-300 p-3">
          <Button className="  bg-white hover:bg-white/80 text-main-700">
            Finalizeaza Comanda
          </Button>
        </div>
      </div>
    </section>
  );
}
