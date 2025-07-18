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

export default async function page() {
  const response = await fetch("http://localhost:8080/product", {
    method: "GET",
    cache: "no-cache",
  });
  if (!response.ok) {
    throw new Error("Couldn't fetch the dog food data");
  }
  const PetFood = await response.json();
  return (
    <div className="w-[98%] pt-10 mx-auto  rounded-md min-h-screen grid grid-cols-1 lg:grid-cols-5 mt-4 gap-4 p-4 text-sm text-stone-900">
      <PetFoodContextProvider data={PetFood}>
        {/* <FilterArea /> */}
        <FilterAreaMobile />
        <main className="lg:col-span-5 flex flex-col gap-4  border-l-zinc-200 ">
          <div className="w-full h-[100px] md:h-[320px] relative rounded-md overflow-hidden">
            <Image
              src="https://cdn.dribbble.com/userupload/16537234/file/original-3fbe0f94873a2571b22f1820e7ebe165.jpg"
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
