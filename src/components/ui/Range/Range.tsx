import { useState, type ComponentProps } from "react";
import Label from "../Label/Label";
import { cn } from "../../../../lib/utilities";
import { cva } from "class-variance-authority";

const rangeVariants = cva("accent-black w-full cursor-pointer ", {
  variants: {
    sizeType: {
      small: "h-2",
      medium: "h-2",
      large: "h-2",
    },
    errorState: {
      false: "",
      true: "border-red-500 focus:border-red-600 focus:ring-red-600 pr-12 accent-red-600",
    },
    successState: {
      false: "",
      true: "border-green-500 focus:border-green-600 focus:ring-green-600 pr-12 accent-green-600",
    },
  },
  defaultVariants: {
    sizeType: "small",
  },
});

type Props = ComponentProps<"input"> & {
  label: string;
  error?: string;
  success?: boolean;
  classNameLabel?: string;
  classNameRangeInput?: string;
  classNameError?: string;
  disabled?: boolean;
  sizeType?: "small" | "medium" | "large";
  minRange?: number;
  maxRange?: number;
  defaultValueRange?: number;
  handleChange: (value: number) => void;
};

export function Range({
  label,
  error,
  success,
  sizeType = "medium",
  className = "",
  classNameRangeInput = "",
  classNameLabel = "",
  classNameError = "",
  disabled,
  defaultValueRange = 0,
  minRange = 0,
  maxRange = 100,
  handleChange,
  ...props
}: Props) {
  const [rangeValue, setRangeValue] = useState(defaultValueRange);
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <Label
        label={label || "range"}
        error={error}
        success={success}
        size={sizeType}
        classNameLabel={classNameLabel}
        disabled={disabled}
      >
        {label}
      </Label>
      <input
        disabled={disabled}
        title={label || "range"}
        id={label || "range"}
        className={cn(
          rangeVariants({
            sizeType,
            errorState: !!error,
            successState: !!success,
          }),
          classNameRangeInput
        )}
        onChange={(e) => {
          handleChange(Number(e.target.value));
          setRangeValue(Number(e.target.value));
        }}
        min={minRange}
        max={maxRange}
        defaultValue={defaultValueRange}
        value={rangeValue}
        {...props}
        type="range"
      />
      {error && (
        <p className={cn("text-sm text-red-600", classNameError)}>{error}</p>
      )}
    </div>
  );
}
