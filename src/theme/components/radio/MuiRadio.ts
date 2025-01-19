import { Components, Theme } from "@mui/material";

export const MuiRadio: Components<Theme>["MuiRadio"] = {

  styleOverrides: {
    root: ({ownerState}) => ({
      padding: 0
    }),
  },
};
