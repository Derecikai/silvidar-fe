import { Inter } from "@next/font/google";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import ButtonShop from "../button-shop";
import ButtonShop2 from "../ButtonShopBig/button-shop2";
import ButtonShop3 from "../ButtonShopBig/button-shop-short";
import ButtonShop4 from "../ButtonShopBig/button-shop4";
import { Separator } from "../ui/separator";

const roboto = Inter({
  subsets: ["latin"],
  weight: ["500"], // Add weights as needed
  style: ["normal"], // Add styles as needed
});

export default function ProductDetails({ data }: { data: TPetFoodData }) {
  return (
    <div>
      <div className="flex items-center bg-main-700 p-1 rounded-[5px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 23 23"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-7 text-main-800 pl-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
          />
        </svg>
        <h1
          className={`${roboto.className} p-2 text-main-800 text-lg md:text-2xl `}
        >
          {data.animalType
            .toLowerCase() // Convert the entire string to lowercase
            .replace(/_/g, " ") // Replace all underscores with spaces
            .replace(/\b\w/g, (char) => char.toUpperCase())}
        </h1>
      </div>
      <Card className="w-[100%] mx-auto mt-2 bg-primary-200">
        <CardHeader>
          <CardTitle
            className={`${roboto.className} text-[22px] text-main-600`}
          >
            Informații Produs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className={`${roboto.className} text-base text-main-600 mb-2`}>
            Nume Produs
          </p>
          <ButtonShop>{data.name}</ButtonShop>
          <p
            className={`${roboto.className} text-base text-main-600 mt-6 mb-2 `}
          >
            Descriere Produs
          </p>
          <ButtonShop2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            dolorem aspernatur, ea impedit nobis eius enim illum. Ut,
            perferendis nobis tenetur voluptate quam eaque! Illo exercitationem
            tenetur vel id qui blanditiis in velit ipsum, cum, est ut rerum nam
            hic commodi veritatis debitis ullam dolorum et animi molestiae
            culpa! Obcaecati?
          </ButtonShop2>
          <section className="flex flex-col  md:justify-around w-full mt-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <p className={`${roboto.className} text-base text-main-600`}>
                  Tip Boaba
                </p>
                <p
                  className={`${roboto.className} text-[13px] text-main-700/60 mb-5`}
                >
                  Boabele de mancare din care sacul este alcatuit
                </p>
              </div>
              <Button className="bg-main-700 hover:bg-main-700 rounded-[5px] cursor-default">
                {data.foodType === "Dry" ? "Uscat" : "Umed"}
              </Button>
            </div>
            <Separator className="my-3 bg-main-700/20" />
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="flex flex-col">
                <p
                  className={`${roboto.className} text-base text-main-600 mt-6 md:mt-0`}
                >
                  Firma
                </p>
                <p
                  className={`${roboto.className} text-[13px] text-main-700/60 mb-5`}
                >
                  Firma produsului
                </p>
              </div>
              <ButtonShop4>Versele-Laga</ButtonShop4>
            </div>
            <Separator className="my-3 bg-main-700/20" />
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
