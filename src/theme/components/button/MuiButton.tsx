import {Components, Theme} from "@mui/material";

export const MuiButton: Components<Theme>["MuiButton"] = {
  defaultProps: {variant: "contained"},
  styleOverrides: {
    root: {
      boxShadow: "unset"
    },
    sizeSmall: {
      height: 40
    },
    sizeMedium: {
      height: 48
    },
    sizeLarge: {
      height: 52
    }
  },
}