'use client'
import { createTheme } from "@mui/material/styles"
import { typography } from "./typograpgy/typography"
import { breakpoints } from "./breakpoints"
export const theme = createTheme({
  direction: 'rtl',
  typography: typography,
  spacing: 4,
  breakpoints,
})

