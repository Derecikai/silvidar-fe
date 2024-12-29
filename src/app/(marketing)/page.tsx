import MenuNav from "@/components/menunav";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"], // Add weights as needed
  style: ["normal"], // Add styles as needed
});
// bg-[radial-gradient(ellipse,#9d9fe6,#33343d)]
export default function Home() {
  return (
    <div
      className="flex flex-col xl:flex-row min-h-screen items-center justify-center gap-5 
  bg-main-500 "
    >
      <Image
        src="https://cdn.dribbble.com/userupload/10455821/file/original-9176d60c7bdb636382f8c4f06ee09705.png"
        alt="Preview of PetSoft"
        width={609}
        height={502}
        className="rounded-xl"
      />
      <Separator className="w-[70%] h-[1px] lg:h-[200px]  lg:w-[1px] text-white" />
      <aside className="flex flex-col justify-center align-center p-6 xl:p-0">
        <h1 className={`text-5xl font-semibold my-6 max-w-[500px]`}>
          <span className="font-extrabold"> Pet-shop Silvidar Timisoara</span>{" "}
          Cele mai bune preturi
        </h1>
        <p className="text-2xl font-medium max-w-[300px] whitespace-normal">
          Preturile din magazin acum la un click distanta
        </p>
        <div className="mt-10 flex gap-3">
          <Button asChild>
            <Link href={"/signup"}>Creeaza un cont</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href={"/shop"}>Magazin</Link>
          </Button>
        </div>
      </aside>
    </div>
  );
}
