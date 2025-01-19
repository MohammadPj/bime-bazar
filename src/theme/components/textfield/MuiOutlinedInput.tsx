import { Components, Theme } from "@mui/material";

export const MuiOutlinedInput: Components<Theme>["MuiOutlinedInput"] = {
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      borderRadius: 0,
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: ownerState.error ? theme.palette.error.main : "#B4B4B4",
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: ownerState.error ? theme.palette.error.main : "#4d4d4d",
        borderWidth: 1,
      },
    }),
    input: ({ ownerState, theme }) => ({
      padding: ownerState.size === "small" ? "13px" : "16px",
      color: ownerState.error ? theme.palette.error.main : "",
      fontSize: ownerState.size === "small" ? 14 : 16,
    }),
    notchedOutline: {
      borderColor: "#B4B4B4",
    },
  },
};
