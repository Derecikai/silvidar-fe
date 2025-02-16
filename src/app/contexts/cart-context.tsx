"use client";
import { createContext, useContext, useEffect, useState } from "react";

type TContextIn = {
  children: React.ReactNode;
};

type TContextOut = {
  cartData: TCartQuantity[];
  addCartData: (data: TPetFoodData) => void;
  deleteCartData: (data: TPetFoodData) => void;
  isLoading: boolean;
};

export const CartContext = createContext<TContextOut | null>(null);

export default function CartContextProvider({ children }: TContextIn) {
  const [cartData, setCartData] = useState<TCartQuantity[]>([]);
  const [isLoading, setIsLoading] = useState(true); // 👈 Add loading state

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("cartData");
      setCartData(savedData ? JSON.parse(savedData) : []);
      setIsLoading(false); // ✅ Data loaded, remove loading state
    }
  }, []);

  useEffect(() => {
    if (!isLoading && typeof window !== "undefined") {
      localStorage.setItem("cartData", JSON.stringify(cartData));
    }
  }, [cartData, isLoading]);

  const addCartData = (data: TPetFoodData) => {
    setCartData((prev) => {
      const existingProduct = prev.find((item) => item.id === data.id);

      if (existingProduct) {
        return prev.map((item) =>
          item.id === data.id
            ? {
                ...item,
                cartQuantity: Math.min(item.cartQuantity + 1, item.quantity),
              }
            : item
        );
      } else if (data.quantity > 0) {
        return [...prev, { ...data, cartQuantity: 1 }];
      }
      return prev;
    });
  };

  const deleteCartData = (data: TPetFoodData) => {
    setCartData((prev) => prev.filter((item) => item.id !== data.id));
  };

  return (
    <CartContext.Provider
      value={{ cartData, addCartData, deleteCartData, isLoading }}
    >
      {children}
    </CartContext.Provider>
  );
}
