import { Box, Stack } from "@mui/material";
import InsuranceDetail from "@/app/(main)/_components/insurance-detail/InsuranceDetail";
import CarOwnerFormPresenter from "@/app/(main)/_components/car-owner-form/CarOwnerFormPresenter";
import CustomHeader from "@/components/custom-header/CustomHeader";
import React from "react";

export default function Home() {
  return (
    <Stack height={"100%"} pb={6} minHeight={"100dvh"} gap={6}>
      <CustomHeader title={"مشخصات بیمه نامه"} />

      <Box mb={2}>
      <InsuranceDetail />
      </Box>

      <CustomHeader title={"مشخصات مالک خودرو"} />

      <CarOwnerFormPresenter />
    </Stack>
  );
}
