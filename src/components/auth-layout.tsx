import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={` min-h-screen
        
          bg-blue-600/80
         backdrop-blur-md flex items-center`}
    >
      {children}
    </div>
  );
}
