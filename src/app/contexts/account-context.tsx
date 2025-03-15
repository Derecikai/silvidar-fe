"use client";
import React, { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type ContextOut = {
  isLoggedIn: string | null;
  updateStatusAuth: (flo: string) => void;
  declineStatusAuth: () => void;
  isAuth: boolean;
  isLoading: boolean;
};

type ContextIn = {
  children: React.ReactNode;
};

export const AccountContext = createContext<ContextOut | null>(null);

export default function AccountContextProvider({ children }: ContextIn) {
  const route = useRouter();
  //States
  const [isLoggedIn, setIsLoggedIn] = useState<string | null>(() => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem("isLoggedIn");
      return storedValue ? JSON.parse(storedValue) : null;
    }
    return null;
  });

  const [isLoading, setIsLoading] = useState(true);

  //Derived states
  const isAuth = !!isLoggedIn;
  console.log(isLoggedIn, "This is : ", isAuth);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("isLoggedIn");
      setIsLoggedIn(savedData ? JSON.parse(savedData) : null);
      setIsLoading(false);
    }
  }, []);

  //handlers setFlo
  const updateStatusAuth = (flo: string) => {
    setIsLoggedIn(flo);
    if (typeof window !== "undefined") {
      localStorage.setItem("isLoggedIn", JSON.stringify(flo));
    }
  };
  //handle eraseFlo
  const declineStatusAuth = () => {
    setIsLoggedIn(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem("isLoggedIn");
    }
    route.push("/login");
  };

  return (
    <AccountContext.Provider
      value={{
        isLoggedIn,
        updateStatusAuth,
        declineStatusAuth,
        isAuth,
        isLoading,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}
