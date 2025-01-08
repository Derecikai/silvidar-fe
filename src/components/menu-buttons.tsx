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

export default function MenuButtons({
  action,
}: {
  action: "dekstop" | "mobile";
}) {
  return (
    <nav
      className={
        action === "dekstop"
          ? "hidden lg:flex lg:flex-row lg:text-sm gap-4 items-center mt-2 lg:ml-[30px]"
          : "flex flex-col w-full lg:hidden bg-white"
      }
    >
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger className={`${action === "mobile" ? "mb-5px" : ""}`}>
            OFERTE
          </MenubarTrigger>
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
