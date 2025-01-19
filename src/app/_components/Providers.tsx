"use client";
import React, { FC, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {Box, CssBaseline, Stack} from "@mui/material";
import AppTheme from "@/theme/AppTheme";

interface RootLayoutClientProps {
  children: ReactNode;
}

const client = new QueryClient();

const Providers: FC<RootLayoutClientProps> = ({ children }) => {
  return (
    <AppTheme>
      <CssBaseline />
      <Stack
        sx={{
          minHeight: "100dvh",
        }}
      >
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
      </Stack>
    </AppTheme>
  );
};

export default Providers;
