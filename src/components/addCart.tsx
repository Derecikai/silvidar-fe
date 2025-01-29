import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Inter, Roboto } from "next/font/google";
import ButtonShop from "./button-shop";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"], // Add weights as needed
  style: ["normal"], // Add styles as needed
});

export default function AddCart({
  productData,
}: {
  productData: TPetFoodData;
}) {
  return (
    <div className="w-full lg:p-3  rounded-md">
      <Card className="mt-2 bg-white/60 lg:mt-0">
        <CardHeader>
          <CardTitle
            className={`${roboto.className} text-3xl lg:text-4xl text-main-600`}
          >
            {productData.name}
          </CardTitle>
          <CardDescription
            className={`${roboto.className} text-2xl text-main-700/70`}
          >
            {productData.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <h1 className="text-4xl">{productData.price} RON</h1>
          <p className={`${roboto.className} text-xl text-main-600`}>
            Tip de mâncare:
          </p>
          <ButtonShop>{productData.foodType.toUpperCase()}</ButtonShop>
          <p className={`${roboto.className} text-xl text-main-600`}>Brand:</p>
          <ButtonShop>VERSELE-LAGA</ButtonShop>
          <p className={`${roboto.className} text-xl text-main-600`}>
            Cantitate:
          </p>
          <ButtonShop>{productData.quantity}</ButtonShop>
          <p className={`${roboto.className} text-xl text-main-600`}>Stoc</p>
          <Button
            className={`bg-main-400 border w-full mx-auto ${
              productData.quantity > 0 ? "border-main-300" : "border-rose-500"
            } text-main-700 hover:bg-main-400 cursor-default`}
          >
            {productData.quantity === 0
              ? "Stoc Indisponibil"
              : "Produs Disponibil in stoc"}
          </Button>
        </CardContent>
        <CardFooter>
          <Button className="bg-main-600 hover:bg-main-700/80">
            Adauga în coș
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
