import React, { FC } from "react";
import { Button, ButtonProps } from "@mui/material";
import Image from "next/image";

interface CustomButtonProps extends ButtonProps {
  isLoading?: boolean;
}

const CustomButton: FC<CustomButtonProps> = ({
  isLoading,
  children,
  disabled,
  variant,
  ...props
}) => {
  return (
    <Button
      disabled={isLoading || disabled}
      startIcon={
        isLoading ? (
          <Image
            width={24}
            height={24}
            src={"/icons/loading-spin.svg"}
            alt={"loading-icon"}
          />
        ) : (
          ""
        )
      }
      sx={{
        backgroundColor:
          variant === "contained" && isLoading ? "#ACACAC !important" : "",
        color: variant === "contained" && isLoading ? "#525252 !important" : "",
      }}
      variant={variant}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
