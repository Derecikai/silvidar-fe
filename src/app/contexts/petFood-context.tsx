"use client";
import { createContext, useEffect, useState } from "react";
type PetFoodIN = {
  children: React.ReactNode;
  data: TPetFoodData[];
};

type PetFoodExtract = {
  FoodData: TPetFoodData[];
};

export const PetFoodContext = createContext<null | PetFoodExtract>(null);

export default function PetFoodContextProvider({ children, data }: PetFoodIN) {
  const [FoodData, setFoodData] = useState<TPetFoodData[]>(data);

  return (
    <PetFoodContext.Provider value={{ FoodData }}>
      {children}
    </PetFoodContext.Provider>
  );
}
