import { Stack } from "@mui/material";
import InsuranceDetail from "@/app/(main)/_components/insurance-detail/InsuranceDetail";
import CarOwnerFormPresenter from "@/app/(main)/_components/car-owner-form/CarOwnerFormPresenter";

export default function Home() {

  return (
    <Stack height={"100%"} pb={6} minHeight={"100dvh"}>
      <InsuranceDetail />

      <CarOwnerFormPresenter />
    </Stack>
  );
}
