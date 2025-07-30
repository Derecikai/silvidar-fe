"use client";

import PetFoodContextProvider from "@/app/contexts/petFood-context";
import React from "react";
import FilterAreaMobile from "../filter-area-mobile";
import Image from "next/image";
import ProductsNumber from "../ShopFilterAndStage/productNumber";
import LayoutButtons from "../ShopFilterAndStage/layoutButtons";
import ProductsPage from "../productsPage";
import { useScrollContext } from "@/lib/hooks";

type TProductsx = {
  PetFood: TPetFoodData[];
};

export default function Products({ PetFood }: TProductsx) {
  return (
    <div className="w-[98%] pt-10 mx-auto  rounded-md min-h-screen grid grid-cols-1 lg:grid-cols-5 mt-4 gap-4 p-4 text-sm text-stone-900">
      <PetFoodContextProvider data={PetFood}>
        {/* <FilterArea /> */}
        <FilterAreaMobile />
        <main className="lg:col-span-5 flex flex-col gap-4  border-l-zinc-200 ">
          <div className="w-full h-[100px] md:h-[320px] relative rounded-md overflow-hidden">
            <Image
              src="https://cdn.dribbble.com/userupload/23084812/file/original-8d33170a3ee04cf0ed304f68e2d53a96.jpg?resize=752x164&vertical=center"
              alt="shop-page-image"
              fill // Makes the image fill the container
              quality={100} // High quality
              className="object-cover" // Ensures the image covers the container without distortion
              sizes="(max-width: 1000px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive sizes
            />
          </div>
          <div className="flex justify-between w-[100%] h-[50px] gap-14 items-center">
            {/* <Searchbar /> */}
            <ProductsNumber />
            <LayoutButtons />
          </div>
          <ProductsPage />
        </main>
      </PetFoodContextProvider>
    </div>
  );
}
