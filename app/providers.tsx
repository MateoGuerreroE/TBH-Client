"use client";
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from "react";
import { InitiateVisitorToken } from "./components/hooks/initiateVisitorToken";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  InitiateVisitorToken();

  return (
    <QueryClientProvider client={queryClient}>
      <HeroUIProvider>
        <ToastProvider />
        {children}
      </HeroUIProvider>
    </QueryClientProvider>
  );
}
