import React, { FC } from "react";
import CustomHeader from "@/components/custom-header/CustomHeader";
import { Box, Button, Stack } from "@mui/material";
import InsuranceDetail from "@/app/(main)/_components/insurance-detail/InsuranceDetail";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const SuccessSubmitInsurance: FC = () => {
  return (
    <Stack minHeight={"100dvh"} pb={3}>
      <Box mb={6}>
        <CustomHeader title={"مشخصات بیمه نامه"} />
      </Box>

      <Stack alignItems={"center"} mb={8} gap={4}>
        <Image
          width={60}
          height={66}
          src={"/images/success-submission.svg"}
          alt={"success-icon"}
        />
        <Typography fontSize={16} fontWeight={500}>
          ثبت اطلاعات شما، با{" "}
          <Typography component={"span"} fontWeight={500} color={"#34A862"}>
            موفقیت
          </Typography>{" "}
          انجام شد.
        </Typography>
      </Stack>

      <InsuranceDetail />

      <Box flexGrow={1} />

      <Button
        component={Link}
        href={"/"}
        color={"secondary"}
        sx={{ alignSelf: "end", minWidth: 140, mr: 4.5 }}
      >
        بازگشت
      </Button>
    </Stack>
  );
};

export default SuccessSubmitInsurance;
