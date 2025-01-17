"use client";
import React, { FC, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Box, CssBaseline } from "@mui/material";
import AppTheme from "@/theme/AppTheme";

interface RootLayoutClientProps {
  children: ReactNode;
}

const client = new QueryClient();

const Providers: FC<RootLayoutClientProps> = ({ children }) => {
  return (
    <AppTheme>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
        }}
      >
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
      </Box>
    </AppTheme>
  );
};

export default Providers;
