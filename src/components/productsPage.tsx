"use client";
import { usePetDataContext, useScrollContext } from "@/lib/hooks";
import React from "react";
import ProductItem from "./product-itemPage";
import { motion } from "framer-motion";

export default function ProductsPage() {
  const { isBig } = useScrollContext();
  const { FoodData } = usePetDataContext();

  return (
    <div
      className={` grid relative gap-4 transition-all duration-500 ${
        isBig
          ? "grid-cols-[repeat(auto-fit,minmax(215px,1fr))]"
          : "grid-cols-[repeat(auto-fit,minmax(250px,1fr))]"
      }`}
    >
      {FoodData &&
        FoodData.map((item, index) => (
          <motion.div
            layout
            key={index}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            whileHover={{ scale: 1.07 }}
            className="rounded-xl transition-all duration-100 hover:shadow-lg cursor-pointer p-2"
          >
            <ProductItem data={item} />
          </motion.div>
        ))}
    </div>
  );
}
