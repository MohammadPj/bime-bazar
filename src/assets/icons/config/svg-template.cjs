// src/_components/icons/svg-template.js

const comments = `
// Auto-generated file created by svgr-cli source svg-template.js
// Run yarn icons:create to update
// Do not edit
`

const template = (
  { imports, interfaces, componentName, props, jsx, exports },
  { tpl },
) => {
  return tpl`
${comments}
${imports};
import Box, {BoxProps} from '@mui/material/Box';

${interfaces};

interface IIconProps extends SVGProps<any> {
  color?: string;
  style?:  React.CSSProperties
  width?: any;
  height?: any
  boxProps?: BoxProps
}

const ${componentName} = ({color, style, width, height, boxProps, ...props}: IIconProps) => {
const svg = ${jsx}

    return  <Box width={width || 24} height={height || 24} display={"flex"} {...boxProps}>{svg}</Box>
}

${exports};
`
}

module.exports = template
