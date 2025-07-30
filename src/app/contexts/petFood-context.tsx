"use client";
import { createContext, useEffect, useState } from "react";
type PetFoodIN = {
  children: React.ReactNode;
  data: TPetFoodData[];
};

type PetFoodExtract = {
  FoodData: TPetFoodData[];
  foodLength: number;
};

export const PetFoodContext = createContext<null | PetFoodExtract>(null);

export default function PetFoodContextProvider({ children, data }: PetFoodIN) {
  const [FoodData, setFoodData] = useState<TPetFoodData[]>(data);
  const foodLength = FoodData.length;
  return (
    <PetFoodContext.Provider value={{ FoodData, foodLength }}>
      {children}
    </PetFoodContext.Provider>
  );
}
