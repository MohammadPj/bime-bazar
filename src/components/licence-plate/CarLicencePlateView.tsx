"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Typography, { TypographyProps } from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Stack } from "@mui/material";
import Image from "next/image";

export interface ICarLicencePlate {
  firstNumber?: string;
  secondNumber?: string;
  type?: string;
  region?: string;
}

interface Props {
  licencePlate: ICarLicencePlate;
  typoProps?: TypographyProps;
  width?: number | string;
}

const CarLicencePlateView: FC<Props> = ({
  licencePlate,
  width = 194,
  typoProps,
}) => {
  const [boxElement, setBoxElement] = useState<HTMLElement | null>(null);

  const widthRef = boxElement?.clientWidth || 194;
  const height = (widthRef * 36) / 194;
  const fontSize = 18;

  useEffect(() => {
    const boxEl = document.getElementById("car-licence-plate-view");
    setBoxElement(boxEl);
  }, [width]);

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      flexWrap={"nowrap"}
      width={width}
      sx={{ aspectRatio: 190 / 36 }}
      minHeight={36}
      border={"2px solid"}
      borderRadius={widthRef / 200}
      style={{ direction: "ltr" }}
      id={"car-licence-plate-view"}
      overflow={"hidden"}
    >
      {/*@ts-ignore*/}
      {/*<img height={"105%"} src={LicenceLabel?.src || LicenceLabel} alt={""} />*/}

      <Stack
        height={height}
        width={height}
        bgcolor={"#1D48E1"}
        borderLeft={"2px solid"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={1}
        pt={2}
      >
        <Image
          src={"/images/iran-flag.png"}
          alt={"iran-flag"}
          width={30}
          height={15}
        />
        <Typography mr={4} color={"white"} fontSize={12} fontWeight={900}>
          I.R.
        </Typography>
      </Stack>

      <Box
        display={"flex"}
        gap={1}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        flexGrow={1}
        mt={2}
      >
        <Typography
          fontSize={fontSize}
          fontWeight={600}
          color={"#303030"}
          {...typoProps}
        >
          {licencePlate.firstNumber}
        </Typography>

        <Typography
          fontSize={fontSize}
          fontWeight={600}
          color={"#303030"}
          {...typoProps}
        >
          {licencePlate.type}
        </Typography>

        <Typography
          fontSize={fontSize}
          fontWeight={600}
          color={"#303030"}
          {...typoProps}
        >
          {licencePlate.secondNumber}
        </Typography>
      </Box>

      <Divider
        flexItem
        orientation={"vertical"}
        sx={{ borderWidth: "1px", borderColor: "black" }}
      />

      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        height={"100%"}
        width={height}
        position={"relative"}
        mt={2}
      >
        {/*<img*/}
        {/*  width={"80%"}*/}
        {/*  //@ts-ignore*/}
        {/*  src={IranLabel?.src || IranLabel}*/}
        {/*  alt={"label-iran"}*/}
        {/*  style={{ position: "absolute", top: height * 0.05 }}*/}
        {/*/>*/}

        <Typography
          fontSize={fontSize}
          fontWeight={600}
          color={"#303030"}
          {...typoProps}
        >
          {licencePlate.region}
        </Typography>
      </Stack>
    </Box>
  );
};

export default CarLicencePlateView;
