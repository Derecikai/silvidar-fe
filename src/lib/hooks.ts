import { ScrollContext } from "@/app/contexts/scrollbar-context";
import { useContext } from "react";

export function useScrollContext() {
  const context = useContext(ScrollContext);

  if (!context) {
    throw new Error("What are you trying to acces is not in the pet context");
  }

  return context;
}
