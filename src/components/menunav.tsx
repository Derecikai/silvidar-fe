import { NavigationMenu } from "@/components/ui/navigation-menu";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";
import MenuButtons from "./menu-buttons";

export default function MenuNav() {
  return (
    <div className="flex w-[97%] mx-auto ">
      {/* First menu bar */}
      <NavigationMenu className="flex items-center justify-between min-w-full h-[65px] border-grey/60 border-b ">
        <Image
          src=" https://cdn.dribbble.com/userupload/14490438/file/original-ded17d5d4d81cebd39b3370426f3665d.jpg?resize=1024x768&vertical=center"
          alt="Preview of PetSoft"
          width={60}
          height={60}
          className="rounded-xl"
        />

        <MenuButtons />

        <div className="w-50px">ACASA</div>
      </NavigationMenu>
    </div>
  );
}
