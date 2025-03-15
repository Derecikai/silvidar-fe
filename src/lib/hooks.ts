import AccountContextProvider, {
  AccountContext,
} from "@/app/contexts/account-context";
import { CartContext } from "@/app/contexts/cart-context";
import { PetFoodContext } from "@/app/contexts/petFood-context";
import { ScrollContext } from "@/app/contexts/scrollbar-context";
import { useContext } from "react";

export function useScrollContext() {
  const context = useContext(ScrollContext);

  if (!context) {
    throw new Error("What are you trying to acces is not in the pet context");
  }

  return context;
}

export function usePetDataContext() {
  const context = useContext(PetFoodContext);
  if (!context) {
    throw new Error(
      "What are you trying to acces is not in the PetData context"
    );
  }

  return context;
}

export function useCartContext() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartContextProvider");
  }
  return context;
}

export function useAccountContext() {
  const context = useContext(AccountContext);
  if (!context) {
    throw new Error("useAccount must be used withing a AccountProvider");
  }
  return context;
}
