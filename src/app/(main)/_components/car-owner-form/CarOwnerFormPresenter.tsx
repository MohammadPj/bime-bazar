"use client";
import React, { FC, useState } from "react";
import CarOwnerForm, {
  ICarOwnerForm,
} from "@/app/(main)/_components/car-owner-form/CarOwnerForm";
import { useForm } from "react-hook-form";
import { Box, Stack, SwipeableDrawer } from "@mui/material";
import CustomButton from "@/components/custom-button/CustomButton";
import { useOrderCompletionMutation } from "@/services/api/common/hooks";
import Typography from "@mui/material/Typography";
import CustomDrawer from "@/components/custom-drawer/CustomDrawer";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

interface CarOwnerFormPresenterProps {}

type TOpenDrawers = "try-again"
const CarOwnerFormPresenter: FC<CarOwnerFormPresenterProps> = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const params = new URLSearchParams(searchParams);

  const { mutate: mutateOrderCompletion, isPending } =
    useOrderCompletionMutation();
  const form = useForm<ICarOwnerForm>();

  const handleSubmit = (values: ICarOwnerForm) => {
    mutateOrderCompletion(values, {
      onError: () => {
        handleChangeDrawer('try-again');
        handleChangeDrawer(undefined)
      },
      onSuccess: () => {
        router.push("/success-submit-insurance")
      }
    });
  };

  const handleChangeDrawer = (modal?: TOpenDrawers) => {
    if (modal) {
      params.set("modal", modal);
    } else {
      params.delete("modal");
    }
    router.push(`${pathname}?${params?.toString()}`);
  };

  return (
    <Stack
      flexGrow={1}
      component={"form"}
      onSubmit={form.handleSubmit(handleSubmit)}
    >
      <CarOwnerForm form={form} />

      <Box flexGrow={1} />

      <CustomButton
        sx={{ alignSelf: "end", mr: 5, minWidth: 131 }}
        color={"secondary"}
        disabled={Object.keys(form.formState.dirtyFields)?.length < 2}
        type={"submit"}
        isLoading={isPending}
      >
        تایید و ادامه
      </CustomButton>

      <CustomDrawer
        name={'try-again'}
        open={searchParams.get("modal") === "try-again"}
        onClose={() => handleChangeDrawer(undefined)}
        onOpen={() => handleChangeDrawer('try-again')}
      >
        <Stack px={3} pt={3}>
          <Typography fontSize={14} fontWeight={500}>
            متاسفانه در ثبت اطلاعات شما، خطایی رخ داده است.
          </Typography>
          <Typography fontSize={14} fontWeight={500}>
            مجددا، تلاش کنید.
          </Typography>

          <Box display={"flex"} py={2.5} gap={2.5}>
            <CustomButton
              sx={{ flexGrow: 1, width: 0 }}
              color={"secondary"}
              onClick={() => handleSubmit(form.getValues())}
              isLoading={isPending}
            >
              تلاش مجدد
            </CustomButton>

            <CustomButton
              sx={{ flexGrow: 1, width: 0 }}
              color={"secondary"}
              variant={"outlined"}
              onClick={() => handleChangeDrawer(undefined)}
              disabled={isPending}
            >
              بازگشت
            </CustomButton>
          </Box>
        </Stack>
      </CustomDrawer>
    </Stack>
  );
};

export default CarOwnerFormPresenter;
