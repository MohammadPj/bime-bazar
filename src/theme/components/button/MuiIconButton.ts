import { Components, Theme } from "@mui/material";

export const MuiIconButton: Components<Theme>["MuiIconButton"] = {

  styleOverrides: {
    root: ({ownerState}) => ({
      borderRadius: 4,
    }),

  },
};
