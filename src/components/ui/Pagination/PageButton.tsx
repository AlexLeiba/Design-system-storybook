import React, { type ComponentProps } from "react";
import { cn } from "../../../../lib/utilities";

type Props = ComponentProps<"button"> & {
  classNamePageButton?: string;
  children: React.ReactNode;
  isSelected?: boolean;
};
function PageButton({
  classNamePageButton = "",

  children,
  isSelected = false,
  ...props
}: Props) {
  return (
    <button
      className={cn(
        isSelected ? "bg-black text-white" : "",
        "py-1 px-3 text-xl rounded-lg cursor-pointer hover:bg-black/80 hover:text-white transition-all",
        classNamePageButton
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default PageButton;
