import React, { FC } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import Image from "next/image";

interface CustomHeaderProps {
  title: string;
}

const CustomHeader: FC<CustomHeaderProps> = ({ title }) => {
  return (
    <AppBar
      position={"static"}
      sx={{ bgcolor: "#fff", boxShadow: "0px 3px 7px -1px #2222221A" }}
    >
      <Toolbar sx={{ gap: 1.5 }}>
        <Image src={"/icons/car.png"} alt={"car-icon"} width={32} height={32} />

        <Typography
          variant="h6"
          fontSize={18}
          fontWeight={500}
          sx={{ flexGrow: 1 }}
        >
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default CustomHeader;
