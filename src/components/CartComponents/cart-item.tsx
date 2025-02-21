"use client";
import { Roboto } from "next/font/google";
import Image from "next/image";
import React from "react";
import { useCartContext } from "@/lib/hooks";
import CartDekstop from "../CartScreen/cart-dekstop";
import CartMobile from "../CartScreen/cart-mobile";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500"],
  style: ["normal"],
});

type TCartItem = {
  data: TCartQuantity;
  screen: "dekstop" | "mobile";
};

export default function CartItem({ data, screen }: TCartItem) {
  const { increaseCardItem } = useCartContext();

  return (
    <>
      {screen === "dekstop" ? (
        <CartDekstop data={data} />
      ) : (
        <CartMobile data={data} />
      )}
    </>
  );
}
