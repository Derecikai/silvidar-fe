"use client";
import { createContext, useEffect, useState } from "react";

type TScrollContext = {
  children: React.ReactNode;
};

type scrollContextExtract = {
  isScrolled: boolean;
};

export const ScrollContext = createContext<scrollContextExtract | null>(null);

export default function ScrollContextProvider({ children }: TScrollContext) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page has been scrolled more than 200px
      setIsScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider
      value={{
        isScrolled,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}
