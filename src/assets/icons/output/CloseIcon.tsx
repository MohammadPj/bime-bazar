// Auto-generated file created by svgr-cli source svg-template.js
// Run yarn icons:create to update
// Do not edit
import * as React from "react";
import type { SVGProps } from "react";
import Box, { BoxProps } from "@mui/material/Box";
interface IIconProps extends SVGProps<any> {
  color?: string;
  style?: React.CSSProperties;
  width?: any;
  height?: any;
  boxProps?: BoxProps;
}
const SvgCloseIcon = ({
  color,
  style,
  width,
  height,
  boxProps,
  ...props
}: IIconProps) => {
  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 14"
      style={style}
      width="100%"
      height="100%"
      display={'flex'}
      {...props}
    >
      <path
        fill={color || "#C2C2C2"}
        d="M14 1.4 12.6 0 7 5.6 1.398 0l-1.4 1.4 5.6 5.6-5.6 5.6 1.4 1.4 5.6-5.6 5.6 5.6 1.4-1.4L8.4 7z"
      />
    </svg>
  );
  return (
    <Box width={width || 24} height={height || 24} {...boxProps}>
      {svg}
    </Box>
  );
};
export default SvgCloseIcon;
