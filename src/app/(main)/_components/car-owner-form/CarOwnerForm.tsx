"use client";
import React, { FC } from "react";
import { Box, Stack } from "@mui/material";
import CustomHeader from "@/components/custom-header/CustomHeader";
import Typography from "@mui/material/Typography";
import { Controller, useForm, UseFormReturn } from "react-hook-form";
import { TFormSchema } from "@/components/form/type";
import Form from "@/components/form/Form";
import {
  validateNationalCode,
  validatePhoneNumber,
} from "@/helpers/validations/validations";
import ChooseAddressDrawer from "@/app/(main)/_components/car-owner-form/choose-address/ChooseAddressDrawer";
import { useGetMyAddresses } from "@/services/api/common/hooks";

export interface ICarOwnerForm {
  nationalId: string;
  phoneNumber: string;
  addressId: string;
}

interface CarOwnerInformationProps {
  form: UseFormReturn<ICarOwnerForm>;
}

const CarOwnerForm: FC<CarOwnerInformationProps> = ({ form }) => {
  const { data: myAddresses, isLoading } = useGetMyAddresses();

  const schema: TFormSchema = [
    {
      type: "number",
      name: "nationalId",
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

  const handleSelectAddress = (addressId: string) => {
    form.setValue("addressId", addressId);
  };

  return (
    <Stack gap={6}>

      <Stack width={"100%"} px={5}>
        <Typography fontSize={16} fontWeight={500} mb={2}>
          لطفا اطلاعات مالک شخصی خودرو را وارد کنید:
        </Typography>

        <Form
          schema={schema}
          form={form}
          gridContainerProps={{ rowGap: 0 }}
          gridItemProps={{ xs: 12 }}
          itemProps={{ size: "small" }}
        />
      </Stack>

      <Stack px={5} gap={1.5} pb={6}>
        <Typography fontSize={16} fontWeight={500}>
          آدرس جهت درج روی بیمه نامه
        </Typography>

        <Controller
          name="addressId"
          control={form.control}
          rules={{required: true}}
          render={({ field, fieldState }) =>
            !field.value ? (
              <>
                <Typography fontSize={14} fontWeight={400} color={fieldState.error ? 'error' : ""}>
                  لطفا آدرسی که میخواهید روی بیمه نامه درج شود را وارد کنید.
                </Typography>

                <ChooseAddressDrawer onSubmit={handleSelectAddress} />
              </>
            ) : (
              <Typography>
                {
                  myAddresses?.find((address) => address.id === field.value)?.details
                }
              </Typography>
            )
          }
        />
      </Stack>
    </Stack>
  );
};

export default CarOwnerForm;
