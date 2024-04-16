"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface ITanstackProviderProps {
  children: any;
}
const queryClient = new QueryClient();

function TanstackProvider({ children }: ITanstackProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default TanstackProvider;
