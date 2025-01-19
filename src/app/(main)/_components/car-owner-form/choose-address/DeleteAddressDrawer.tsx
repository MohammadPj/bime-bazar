import React, { FC } from "react";
import { Box, IconButton, Stack, SwipeableDrawer } from "@mui/material";
import Typography from "@mui/material/Typography";
import SvgCloseIcon from "@/assets/icons/output/CloseIcon";
import CustomButton from "@/components/custom-button/CustomButton";
import { IGetMyAddresses } from "@/services/api/common/types";
import CustomDrawer from "@/components/custom-drawer/CustomDrawer";
import { useRouter } from "next/navigation";

interface DeleteAddressDrawerProps {
  isOpen?: boolean;
  onClose: () => void;
  onOpen: () => void;
  address?: IGetMyAddresses;
  onConfirm?: (addressId: string) => void;
}

const DeleteAddressDrawer: FC<DeleteAddressDrawerProps> = ({
  isOpen,
  onClose,
  onOpen,
  address,
  onConfirm,
}) => {
  return (
    <SwipeableDrawer
      anchor={"bottom"}
      open={isOpen}
      onClose={onClose}
      onOpen={onOpen}
    >
      <Stack gap={2}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          height={56}
          alignItems={"center"}
          px={3}
          borderBottom={"1px solid #E0E0E0"}
        >
          <Typography fontSize={16} fontWeight={500}>
            حذف آدرس
          </Typography>

          <IconButton onClick={onClose}>
            <SvgCloseIcon width={14} height={14} />
          </IconButton>
        </Box>

        <Stack px={3} gap={4}>
          <Typography fontSize={14} fontWeight={500}>
            آیا از حذف آدرس خود، مطمین هستید؟
          </Typography>

          <Stack gap={2} p={2} bgcolor={"#F2F2F2"}>
            <Typography fontSize={14} fontWeight={500}>
              {address?.name}
            </Typography>
            <Typography fontSize={12} fontWeight={400} color={"#757575"}>
              {address?.details}
            </Typography>
          </Stack>
        </Stack>

        <Box
          p={2.5}
          boxShadow={"0px 3px 15px 3px #2222221A"}
          display={"flex"}
          gap={2.5}
        >
          <CustomButton
            fullWidth
            color={"secondary"}
            onClick={() => onConfirm?.(address?.id!)}
          >
            تایید
          </CustomButton>

          <CustomButton
            fullWidth
            color={"secondary"}
            variant={"outlined"}
            onClick={onClose}
          >
            بازگشت
          </CustomButton>
        </Box>
      </Stack>
    </SwipeableDrawer>
  );
};

export default DeleteAddressDrawer;
