import React, { FC } from "react";
import CustomHeader from "@/components/custom-header/CustomHeader";
import CarLicencePlateView from "@/components/licence-plate/CarLicencePlateView";
import { Box, Stack } from "@mui/material";
import { ILabelValue } from "@/types/common/type";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import {grey} from "@mui/material/colors";

interface InsuranceDetailProps {}

const InsuranceDetail: FC<InsuranceDetailProps> = () => {
  const insuranceInfo: ILabelValue[] = [
    { label: "شرکت بیمه گر", value: "پارسیان" },
    { label: "برند خودرو", value: "پژو" },
    { label: "مدل خودرو", value: "206 تیپ 6" },
  ];

  return (
    <Stack gap={6} alignItems={"center"} pb={8}>

      <CarLicencePlateView
        width={280}
        licencePlate={{
          firstNumber: "64",
          type: "ک",
          secondNumber: "988",
          region: "60",
        }}
      />

      <Stack gap={2} width={"100%"} px={10}>
        {insuranceInfo.map((info) => (
          <Box
            key={info.value}
            display={"flex"}
            width={"100%"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography color={"#808080"} fontSize={14} fontWeight={400}>{info.label}</Typography>

            <Divider
              sx={{ flexGrow: 1, height: 1, mx: 4, borderStyle: "dashed" }}
            />

            <Typography fontSize={14} fontWeight={400}>{info.value}</Typography>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default InsuranceDetail;
