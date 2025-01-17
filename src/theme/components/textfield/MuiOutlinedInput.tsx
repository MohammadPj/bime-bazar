import {Components, Theme} from "@mui/material";

export const MuiOutlinedInput: Components<Theme>["MuiOutlinedInput"] = {
  styleOverrides: {
    root: {borderRadius: 0},
    input: ({ownerState, theme}) => ({
      padding: ownerState.size === "small" ? "13px" : "16px",
      color: ownerState.error ? theme.palette.error.main : "",
      fontSize: ownerState.size === "small" ? 14 : 16
    }),
  }
}