"use client";
import FilterArea from "@/components/filter-area";
import ProductsPage from "@/components/productsPage";
import Searchbar from "@/components/searchbar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useEffect, useState } from "react";

export default function page() {
  const [direction, setDirection] = useState("horizontal");

  useEffect(() => {
    // Check the viewport size and set the direction
    const updateDirection = () => {
      if (window.innerWidth <= 768) {
        setDirection("vertical");
      } else {
        setDirection("horizontal");
      }
    };

    // Run on initial load
    updateDirection();

    // Add resize listener
    window.addEventListener("resize", updateDirection);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("resize", updateDirection);
  }, []);

  return (
    // <div className="w-[97%] mt-4 mx-auto bg-white min-h-screen grid grid-cols-1 lg:grid-cols-4 gap-4 p-4 border-green-300 border">
    //   <FilterArea />
    //   <main className="lg:col-span-3 flex flex-col gap-4 border-purple-900 border">
    //     <Searchbar />
    //     <ProductsPage />
    //   </main>
    // </div>
    <ResizablePanelGroup
      className="w-[97%] mt-4 mx-auto bg-white min-h-screen grid grid-cols-1 lg:grid-cols-4 gap-4 p-4 "
      direction={direction === "vertical" ? "vertical" : "horizontal"}
    >
      <ResizablePanel className="bg-main-800">
        <FilterArea />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel className="lg:col-span-3 flex flex-col gap-4 ">
        <Searchbar />
        <ProductsPage />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
