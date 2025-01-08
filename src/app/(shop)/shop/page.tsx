import FilterArea from "@/components/filter-area";
import FilterAreaMobile from "@/components/filter-area-mobile";
import ProductsPage from "@/components/productsPage";
import Searchbar from "@/components/searchbar";

export default function page() {
  return (
    <div className="w-[97%] mt-4 mx-auto bg-white min-h-screen grid grid-cols-1 lg:grid-cols-5 gap-4 p-4 text-sm text-stone-900">
      <FilterArea />
      <FilterAreaMobile />
      <main className="lg:col-span-4 flex flex-col gap-4  border-l-zinc-200 ">
        <Searchbar />
        <ProductsPage />
      </main>
    </div>
  );
}
