import React from "react";
import { FC, ReactNode } from "react";
import { Container } from "@mui/material";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <Container maxWidth={"sm"} sx={{ px: 0, height: '100%' }}>
      {children}
    </Container>
  );
};

export default MainLayout;
