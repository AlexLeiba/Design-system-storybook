import React, { type ComponentProps } from "react";
import { cn } from "../../../../lib/utilities";

type Props = ComponentProps<"p"> & {
  children: React.ReactNode;
};
function Label({ children, className = "" }: Props) {
  return <p className={cn("", className)}>{children}</p>;
}

export default Label;
