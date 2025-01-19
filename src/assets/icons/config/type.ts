import { BoxProps } from "@mui/material/Box"
import { SVGProps } from "react"

export interface IIconProps extends SVGProps<any> {
  color?: string
  style?: React.CSSProperties
  width?: any
  height?: any
  boxProps?: BoxProps
}
