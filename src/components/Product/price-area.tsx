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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Inter } from "@next/font/google";
import ButtonShop from "../button-shop";
import ButtonShop3 from "../ButtonShopBig/button-shop-short";
import ButtonShop4 from "../ButtonShopBig/button-shop4";
import { Separator } from "../ui/separator";

const roboto = Inter({
  subsets: ["latin"],
  weight: ["500"], // Add weights as needed
  style: ["normal"], // Add styles as needed
});

export default function PricesArea({ data }: { data: TPetFoodData }) {
  return (
    <section className="w-full">
      <Card className="w-[100%] shadow-lg mx-auto bg-primary-200">
        <CardHeader>
          <CardTitle
            className={`${roboto.className} text-[22px] text-main-600`}
          >
            Prețuri
          </CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col  md:justify-around w-full mt-10">
          <div className="flex items-center justify-between">
            <p
              className={`${roboto.className} text-base text-main-600 mb-2 min-w-[50%]`}
            >
              Preț Kilogram
            </p>
            <ButtonShop4 className=""> {data.price} RON</ButtonShop4>
          </div>
          <Separator className="my-3 bg-main-700/20" />
          <div className="flex items-center justify-between">
            <p
              className={`${roboto.className} text-base text-main-600 mb-2 min-w-[50%]`}
            >
              Preț Sac
            </p>
            <ButtonShop4 className="">
              {data.price * (data.weight / 100)} RON
            </ButtonShop4>
          </div>
          <Separator className="my-3 bg-main-700/20" />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    </section>
  );
}
