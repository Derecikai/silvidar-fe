import FilterArea from "@/components/filter-area";
import ProductsPage from "@/components/productsPage";
import Searchbar from "@/components/searchbar";

export default function page() {
  return (
    <div className="w-[97%] mt-4 mx-auto bg-white min-h-screen grid grid-cols-1 lg:grid-cols-5 gap-4 p-4 ">
      <FilterArea />
      <main className="lg:col-span-4 flex flex-col gap-4  border-l-zinc-200 ">
        <Searchbar />
        <ProductsPage />
      </main>
    </div>
  );
}
