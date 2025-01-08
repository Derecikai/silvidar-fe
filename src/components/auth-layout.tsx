import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`text-sm text-stone-900 min-h-screen
        
          bg-main-500
         backdrop-blur-md flex items-center`}
    >
      {children}
    </div>
  );
}
