import PetFoodContextProvider from "@/app/contexts/petFood-context";
import FilterArea from "@/components/filter-area";
import FilterAreaMobile from "@/components/filter-area-mobile";
import ProductsPage from "@/components/productsPage";
import Searchbar from "@/components/searchbar";
import Image from "next/image";

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
    <div className="w-[97%] md:mt-4 mx-auto bg-white min-h-screen grid grid-cols-1 lg:grid-cols-5 gap-4 p-4 text-sm text-stone-900">
      <PetFoodContextProvider data={PetFood}>
        <FilterArea />
        <FilterAreaMobile />
        <main className="lg:col-span-4 flex flex-col gap-4  border-l-zinc-200 ">
          <div className="w-full h-[100px] md:h-[300px] relative rounded-md overflow-hidden">
            <Image
              src="https://cdn.dribbble.com/userupload/3161446/file/original-21d9af4618270b966299c352012d57fb.png"
              alt="shop-page-image"
              fill // Makes the image fill the container
              quality={100} // High quality
              className="object-cover" // Ensures the image covers the container without distortion
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive sizes
            />
          </div>
          <Searchbar />
          <ProductsPage />
        </main>
      </PetFoodContextProvider>
    </div>
  );
}
