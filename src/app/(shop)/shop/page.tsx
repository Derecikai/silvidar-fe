import PetFoodContextProvider from "@/app/contexts/petFood-context";
import FilterArea from "@/components/filter-area";
import FilterAreaMobile from "@/components/filter-area-mobile";
import ProductsPage from "@/components/productsPage";
import Searchbar from "@/components/searchbar";
import Image from "next/image";
import { Columns3, Columns4, Grid2x2 } from "lucide-react";
import LayoutButtons from "@/components/ShopFilterAndStage/layoutButtons";
import { Separator } from "@radix-ui/react-separator";
import ProductsNumber from "@/components/ShopFilterAndStage/productNumber";
import Products from "@/components/ProductsComponents/Products";

export default async function page() {
  const response = await fetch("http://localhost:8080/product", {
    method: "GET",
    cache: "no-cache",
  });
  if (!response.ok) {
    throw new Error("Couldn't fetch the dog food data");
  }
  const PetFood = await response.json();
  return <Products PetFood={PetFood} />;
}
