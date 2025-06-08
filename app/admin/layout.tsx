import React from "react";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-sky-100 min-h-[calc(100vh-6rem)] py-20 px-14 flex flex-col items-center font-poppins">
      {children}
    </main>
  );
}
