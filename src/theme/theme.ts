'use client'
import { createTheme } from "@mui/material/styles"
import { typography } from "./typograpgy/typography"
import { breakpoints } from "./breakpoints"
import {MuiOutlinedInput} from "@/theme/components/textfield/MuiOutlinedInput";
import {palette} from "@/theme/palette/palette";
import {MuiButton} from "@/theme/components/button/MuiButton";
import {MuiIconButton} from "@/theme/components/button/MuiIconButton";
import {MuiRadio} from "@/theme/components/radio/MuiRadio";

export const theme = createTheme({
  direction: 'rtl',
  typography: typography,
  spacing: 4,
  breakpoints,
  palette: palette,
  components: {
    MuiOutlinedInput,
    MuiButton,
    MuiIconButton,
    MuiRadio
  }
})

