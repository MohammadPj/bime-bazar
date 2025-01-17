import { Container, Stack } from "@mui/material";
import InsuranceDetail from "@/app/(main)/_components/insurance-detail/InsuranceDetail";
import CarOwnerInformation from "@/app/(main)/_components/car-owner-information/CarOwnerInformation";

export default function Home() {
  return (
    <Stack>
      <InsuranceDetail />
      <CarOwnerInformation />
    </Stack>
  );
}
