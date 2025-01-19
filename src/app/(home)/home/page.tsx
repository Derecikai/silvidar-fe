import HomeTopButtons from "@/components/home-topButtons";
import RealCarusel from "@/components/real-carusel";
import { Separator } from "@/components/ui/separator";
import { Roboto_Slab } from "@next/font/google";

const roboto = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400"], // Add weights as needed
  style: ["normal"], // Add styles as needed
});

export default function page() {
  return (
    <div className="w-full flex flex-col bg-white min-h-screen mt-4">
      <div className="flex items-center w-[97%] mx-auto mt-3 lg:my-4">
        <Separator className="flex-1 bg-main-500" />
        <h2
          className={`${roboto.className} lg:p-3 text-main-600 lg:text-7xl text-3xl border-main-500 rounded-lg`}
        >
          GHID DE UTILIZARE
        </h2>
        <Separator className="flex-1 bg-main-500" />
      </div>
      {/* <HomeTopButtons /> */}
      <RealCarusel />
      <div className="flex items-center w-[97%] mx-auto  mt-3 lg:my-6">
        <Separator className="flex-1 bg-main-500" />
        <h2
          className={`${roboto.className} lg:p-3 text-main-600 lg:text-7xl text-3xl border-main-500 rounded-lg`}
        >
          POPULARE
        </h2>
        <Separator className="flex-1 bg-main-500" />
      </div>

      <div>asd</div>
      <div>sad</div>
      <div>dsaas</div>
      <div>d</div>
      <div>dsa</div>
    </div>
  );
}
