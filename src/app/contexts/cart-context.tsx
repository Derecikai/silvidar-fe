"use client";
import { createContext, useContext, useState } from "react";

type TContextIn = {
  children: React.ReactNode;
};

type TCartQuantity = TPetFoodData & { cartQuantity: number };

type TContextOut = {
  cartData: [] | TCartQuantity[];
  addCartData: (data: TPetFoodData) => void;
  deleteCartData: (data: TPetFoodData) => void;
};

export const CartContext = createContext<TContextOut | null>(null);

export default function CartContextProvider({ children }: TContextIn) {
  const [cartData, setCartData] = useState<TCartQuantity[] | []>([]);

  console.log("Context Value:::", cartData);

  const addCartData = (data: TPetFoodData) => {
    setCartData((prev) => {
      const existingProduct = prev.find((item) => item.id === data.id);

      if (existingProduct) {
        return prev.map((item) =>
          item.id === data.id
            ? {
                ...item,
                cartQuantity: Math.min(
                  item.cartQuantity + 1,
                  item.quantity // Ensure cartQuantity doesn't exceed available stock
                ),
              }
            : item
        );
      } else {
        return [...prev, { ...data, cartQuantity: 1 }];
      }
    });
  };

  const deleteCartData = (data: TPetFoodData) => {
    setCartData((prev) => prev.filter((item) => item.id !== data.id));
  };

  return (
    <CartContext.Provider value={{ cartData, addCartData, deleteCartData }}>
      {children}
    </CartContext.Provider>
  );
}
