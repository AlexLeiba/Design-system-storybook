import React, { type ComponentProps } from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../../lib/utilities";
import type { ToastType } from "./types";

const toastVariants = cva("relative px-10 rounded-md toast-animated", {
  variants: {
    variant: {
      error: "bg-red-600 text-white",
      success: "bg-green-600 text-white",
      info: "bg-gray-200 text-black",
      warning: "bg-yellow-400 text-black",
    },
    sizeType: {
      small: "py-1 text-base",
      medium: "py-2 text-xl",
      large: "py-3 text-2xl",
    },
    fullWidth: {
      true: "w-full",
      false: "w-fit",
    },
  },
  defaultVariants: {
    variant: "error",
    sizeType: "medium",
  },
});

type Props = VariantProps<typeof toastVariants> &
  ComponentProps<"div"> & {
    type: ToastType;
    children: React.ReactNode;
  };
export function ToastBadge({
  type,
  children,
  sizeType,
  className = "",
  fullWidth = false,
  ...props
}: Props) {
  return (
    <div
      className={cn(
        toastVariants({ variant: type, sizeType, fullWidth }),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
