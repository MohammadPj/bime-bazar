import { Components, Theme } from "@mui/material";

export const MuiButton: Components<Theme>["MuiButton"] = {
  defaultProps: {
    variant: "contained",
    disableRipple: true,
  },
  styleOverrides: {
    root: ({ownerState}) => ({
      borderRadius: 0,
      boxShadow: "unset",
      fontSize: 16,
      ":hover": {
        background: ownerState.variant === "contained" ? "var(--variant-containedBg)" : "",
        boxShadow: "unset",
      },
      "&.Mui-disabled": {
        "color": ownerState.variant === "contained" ? "#858484" : "#797979"
      }
    }),
    sizeSmall: {
      height: 40,
    },
    sizeMedium: {
      height: 48,
    },
    sizeLarge: {
      height: 52,
    },
  },
};
