"use client";
import { usePetDataContext } from "@/lib/hooks";
import React from "react";
import ProductItem from "./product-itemPage";

export default function ProductsPage() {
  const { FoodData } = usePetDataContext();

  return (
    <div className="grid relative grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-4">
      <h1 className="lg:hidden absolute top-30">
        PRODUSE GASITE: {FoodData.length}
      </h1>
      {FoodData &&
        FoodData.map((item, index) => <ProductItem key={index} data={item} />)}
    </div>
  );
}
