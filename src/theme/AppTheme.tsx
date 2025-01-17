'use client'
// React
import * as React from "react"
import { FC } from "react"

// Emotion Cache
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter"

// Next SSR insert Html

// Emotion/react
import { ThemeProvider } from "@mui/material"
import rtlPlugin from "stylis-plugin-rtl"
import {theme} from "@/theme/theme"

interface Props {
  children: React.ReactNode
}

const AppTheme: FC<Props> = ({ children }) => {

  return (
    <AppRouterCacheProvider
      options={{
        key: "muirtl",
        // stylisPlugins: [prefixer, rtlPlugin],
        stylisPlugins: [rtlPlugin],
        prepend: true,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppRouterCacheProvider>
  )
}

export default AppTheme
