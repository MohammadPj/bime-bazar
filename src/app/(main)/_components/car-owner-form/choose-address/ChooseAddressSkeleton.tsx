import React, { FC } from "react";
import { Box, IconButton, Skeleton, Stack } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import SvgCloseIcon from "@/assets/icons/output/CloseIcon";
import RadioGroup from "@mui/material/RadioGroup";

const ChooseAddressSkeleton: FC = () => {
  const array = Array.from({ length: 5 }, (x, i) => {});

  return (
    <Stack px={3} width={'100%'}>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        sx={{ gap: 4, width: "100%" }}
      >
        {array?.map((address, i) => (
          <Box key={i} display={"flex"} gap={2} width={'100%'}>
            <FormControlLabel
              value={i}
              sx={{ alignItems: "start", gap: 1.5, mx: 0, flexGrow: 1 }}
              control={<Radio size={"small"} color={"secondary"} />}
              label={
                <Stack width={'100%'}>
                  <Skeleton width={80} variant={"text"} />

                  <Skeleton width={200} variant={"text"} />
                </Stack>
              }
            />

            <IconButton size={"small"} sx={{ alignSelf: "start" }}>
              <SvgCloseIcon width={11} height={11} color={"#FFA5A5"} />
            </IconButton>
          </Box>
        ))}
      </RadioGroup>
    </Stack>
  );
};

export default ChooseAddressSkeleton;
