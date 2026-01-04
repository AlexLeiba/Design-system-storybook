import React from "react";
import { labelInputVariants } from "../../../../lib/cvaVariants";
import { cn } from "../../../../lib/utilities";

type Props = {
  selectedValue: string;
  disabled?: boolean;
  error?: string;
  success?: boolean;
  size?: "small" | "medium" | "large";
  classNameSelectedMultipleItem?: string;
};

export function SelectedItem({
  selectedValue,
  disabled,
  error,
  success,
  size,
  classNameSelectedMultipleItem = "",
}: Props) {
  return (
    <div
      className={cn(
        "flex gap-2 bg-gray-100 rounded-2xl py-1 px-3 text-white",
        classNameSelectedMultipleItem
      )}
    >
      <p
        className={labelInputVariants({
          errorState: !!error,
          successState: !!success,
          disabledState: disabled,
          sizeType: size,
        })}
      >
        {selectedValue}
      </p>
    </div>
  );
}
