import { type ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../../lib/utilities";
import Label from "../Label/Label";

type OptionsType = {
  value: string;
  label: string;
};

const selectVariants = cva("flex flex-col gap-1 pr-2 border  border-gray-400", {
  variants: {
    sizeType: {
      small: "",
      medium: "",
      large: "",
    },
    successState: {
      true: "border-green-500 focus:border-green-600 focus:ring-green-600 ",
      false: "",
    },
    errorState: {
      true: "border-red-500 focus:border-red-600 focus:ring-red-600 ",
      false: "",
    },
  },
  defaultVariants: {
    sizeType: "medium",
    successState: false,
    errorState: false,
  },
});

const selectInputVariants = cva("outline-none disabled:text-gray-400", {
  variants: {
    sizeType: {
      small: "text-sm  py-1 px-2",
      medium: "text-xl  py-1 px-2",
      large: " text-2xl  py-2 px-4",
    },
    successState: {
      true: "border-green-500 focus:border-green-600 focus:ring-green-600 text-green-600",
      false: "",
    },
    errorState: {
      true: "border-red-500 focus:border-red-600 focus:ring-red-600 text-red-600",
      false: "",
    },
  },
  defaultVariants: {
    sizeType: "medium",
    successState: false,
    errorState: false,
  },
});

type Props = ComponentProps<"select"> &
  VariantProps<typeof selectVariants> & {
    label?: string;
    error?: string;
    success?: boolean;
    options: OptionsType[];
    classNameSelectInput?: string;
    classNameLabel?: string;
    classNameError?: string;
    handleSelectValue: (value: string) => void;
  };
export function NativeSelect({
  label,
  error,
  success,
  options,
  disabled = false,
  sizeType = "medium",
  handleSelectValue,
  classNameSelectInput = "",
  classNameLabel = "",
  classNameError = "",
  className = "",
  ...props
}: Props) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <Label
          classNameLabel={classNameLabel}
          label={label}
          error={error}
          success={success}
          disabled={disabled}
          size={sizeType}
        >
          {label}
        </Label>
      )}
      <div
        className={cn(
          selectVariants({
            errorState: !!error,
            successState: !!success,
          }),
          className
        )}
      >
        <select
          disabled={disabled}
          id={label || "select"}
          className={cn(
            selectInputVariants({
              sizeType: sizeType,
              errorState: !!error,
              successState: !!success,
            }),
            classNameSelectInput
          )}
          onChange={(e) => handleSelectValue(e.target.value)}
          {...props}
        >
          {options &&
            options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
        </select>
      </div>
      {error && (
        <p className={cn("text-sm text-red-600", classNameError)}>{error}</p>
      )}
    </div>
  );
}
