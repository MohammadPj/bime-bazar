import React, { FC, useState } from "react";
import { Box, IconButton, Stack, SwipeableDrawer } from "@mui/material";
import CustomButton from "@/components/custom-button/CustomButton";
import { useGetMyAddresses } from "@/services/api/common/hooks";
import Typography from "@mui/material/Typography";
import SvgCloseIcon from "@/assets/icons/output/CloseIcon";
import { useQueryClient } from "@tanstack/react-query";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import ChooseAddressSkeleton from "@/app/(main)/_components/car-owner-form/choose-address/ChooseAddressSkeleton";
import DeleteAddressDrawer from "@/app/(main)/_components/car-owner-form/choose-address/DeleteAddressDrawer";
import { IGetMyAddresses } from "@/services/api/common/types";

interface ChooseAddressProps {
  onSubmit: (addressId: string) => void;
}

type TOpenDrawers = "choose-address" | "delete";
const ChooseAddressDrawer: FC<ChooseAddressProps> = ({ onSubmit }) => {
  const QC = useQueryClient();

  const { data: myAddresses, isLoading } = useGetMyAddresses();

  const [isOpen, setIsOpen] = useState<TOpenDrawers>();
  const [selectedAddressId, setSelectedAddressId] = React.useState<string>("");
  const [selectedAddress, setSelectedAddress] = useState<IGetMyAddresses>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAddressId((event.target as HTMLInputElement).value);
  };

  const handleDeleteAddress = (addressId: string) => {
    const newAddressList = myAddresses?.filter(
      (address) => address.id !== addressId,
    );

    setIsOpen("choose-address");
    QC.setQueryData(["my-addresses"], newAddressList);
  };

  const handleClickDelete = (address: IGetMyAddresses) => {
    setSelectedAddress(address);
    setIsOpen("delete");
  };

  const handleSubmit = () => {
    onSubmit(selectedAddressId!);
    setIsOpen(undefined);
  };

  return (
    <>
      <CustomButton fullWidth onClick={() => setIsOpen("choose-address")}>
        انتخاب از آدرس های من
      </CustomButton>

      <SwipeableDrawer
        anchor={"bottom"}
        open={isOpen === "choose-address"}
        onClose={() => setIsOpen(undefined)}
        onOpen={() => setIsOpen("choose-address")}
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
              انتخاب آدرس
            </Typography>

            <IconButton onClick={() => setIsOpen(undefined)}>
              <SvgCloseIcon width={14} height={14} />
            </IconButton>
          </Box>

          {isLoading ? (
            <ChooseAddressSkeleton />
          ) : (
            <Stack px={3}>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={selectedAddressId}
                onChange={handleChange}
                sx={{ gap: 4 }}
              >
                {myAddresses?.map((address) => (
                  <Box key={address.id} display={"flex"} gap={2}>
                    <FormControlLabel
                      value={address.id}
                      sx={{ alignItems: "start", gap: 1.5, mx: 0, flexGrow: 1 }}
                      control={<Radio size={"small"} color={"secondary"} />}
                      label={
                        <Stack gap={2}>
                          <Typography fontSize={14} fontWeight={500}>
                            {address.name}
                          </Typography>
                          <Typography
                            fontSize={12}
                            fontWeight={400}
                            color={"#757575"}
                          >
                            {address.details}
                          </Typography>
                        </Stack>
                      }
                    />

                    <IconButton
                      size={"small"}
                      sx={{ alignSelf: "start" }}
                      onClick={() => handleClickDelete(address)}
                    >
                      <SvgCloseIcon width={11} height={11} color={"#FFA5A5"} />
                    </IconButton>
                  </Box>
                ))}
              </RadioGroup>
            </Stack>
          )}

          <Box p={2.5} boxShadow={"0px 3px 15px 3px #2222221A"}>
            <CustomButton
              fullWidth
              color={"secondary"}
              disabled={!selectedAddressId}
              onClick={handleSubmit}
            >
              انتخاب
            </CustomButton>
          </Box>
        </Stack>
      </SwipeableDrawer>

      <DeleteAddressDrawer
        isOpen={isOpen === "delete"}
        onClose={() => setIsOpen("choose-address")}
        onOpen={() => setIsOpen("delete")}
        address={selectedAddress!}
        onConfirm={handleDeleteAddress}
      />
    </>
  );
};

export default ChooseAddressDrawer;
