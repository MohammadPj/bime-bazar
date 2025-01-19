"use client";
import React, { FC, useEffect } from "react";
import { SwipeableDrawer, SwipeableDrawerProps } from "@mui/material";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

interface CustomDrawerProps extends Omit<SwipeableDrawerProps, "onClose"> {
  onClose: () => void;
  name: string;
}

const CustomDrawer: FC<CustomDrawerProps> = ({
  open,
  onClose,
  onOpen,
  children,
  name,
  ...props
}) => {
  const searchParams = useSearchParams()
  const pathname = usePathname();
  const router = useRouter();

  const params = new URLSearchParams(searchParams);

  const handleClose = () => {
    router.back();
    if (onClose) {
      onClose();
    }
  };

  useEffect(() => {
    if (open) {
      console.log("on open");
      params.set('modal', name);
      router.push(`${pathname}?${params?.toString()}`)

      return () => {
        console.log("close modal");
        params.delete("modal")
        router.push(`${pathname}?${params?.toString()}`)
      };
    }
  }, [open]);

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={searchParams.get("modal") === name}
      {...props}
      onOpen={onOpen}
      onClose={onClose}
    >
      {children}
    </SwipeableDrawer>
  );
};

export default CustomDrawer;
