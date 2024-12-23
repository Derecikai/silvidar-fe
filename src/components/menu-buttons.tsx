import React from "react";
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
import { Separator } from "@/components/ui/separator";
export default function MenuButtons() {
  return (
    <nav className="flex flex-col lg:flex-row gap-4 items-center mt-2 ml-[30px]">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>OFERTE</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Caini <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>Pisici</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Hamster</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Papagal</MenubarItem>
          </MenubarContent>{" "}
        </MenubarMenu>
      </Menubar>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>NOUA COLECȚIE</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Magazin <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>{" "}
        </MenubarMenu>
      </Menubar>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>DESPRE NOI</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>{" "}
        </MenubarMenu>
      </Menubar>
    </nav>
  );
}
