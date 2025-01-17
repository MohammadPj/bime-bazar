"use client";
import React, { FC } from "react";
import {Button, Stack} from "@mui/material";
import CustomHeader from "@/components/custom-header/CustomHeader";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { TFormSchema } from "@/components/form/type";
import Form from "@/components/form/Form";
import {validateNationalCode, validatePhoneNumber} from "@/helpers/validations/validations";
import { ButtonProps } from "@mui/material"

interface CarOwnerInformationProps {}

const CarOwnerInformation: FC<CarOwnerInformationProps> = () => {
  const form = useForm({ mode: "all" });

  const schema: TFormSchema = [
    {
      type: "number",
      name: "nationalCode",
      label: "",
      placeholder: "کد ملی",
      rules: {
        validate: validateNationalCode,
      },
    },
    {
      type: "number",
      name: "phoneNumber",
      label: "",
      placeholder: "شماره تلفن همراه",
      rules: {
        validate: validatePhoneNumber,
      },
    },
  ];
  return (
    <Stack gap={6}>
      <CustomHeader title={"مشخصات مالک خودرو"} />

      <Stack width={"100%"} px={5}>
        <Typography fontSize={16} fontWeight={500}>
          لطفا اطلاعات مالک شخصی خودرو را وارد کنید:
        </Typography>

        <Form
          schema={schema}
          form={form}
          gridContainerProps={{rowGap: 0}}
          gridItemProps={{ xs: 12 }}
          itemProps={{ size: "small" }}
        />
      </Stack>

      <Stack px={5} gap={1.5} pb={6}>
        <Typography fontSize={16} fontWeight={500}>آدرس جهت درج روی بیمه نامه</Typography>
        <Typography fontSize={14} fontWeight={400}>لطفا آدرسی که میخواهید روی بیمه نامه درج شود را وارد کنید.</Typography>
        <Button fullWidth>انتخاب از آدرس های من</Button>
      </Stack>
    </Stack>
  );
};

export default CarOwnerInformation;
