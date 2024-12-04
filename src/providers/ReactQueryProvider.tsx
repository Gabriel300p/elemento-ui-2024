"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { FC, ReactNode } from "react";

interface ReactQueryProvidersProps {
  children: ReactNode;
}

const ReactQueryProviders: FC<ReactQueryProvidersProps> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProviders;
