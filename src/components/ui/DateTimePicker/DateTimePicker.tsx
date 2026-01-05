import { type ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { BadgeAlert, BadgeCheck } from "lucide-react";
import { labelInputVariants } from "../../../../lib/cvaVariants";
import { cn } from "../../../../lib/utilities";

const inputVariants = cva(
  [
    "py-2 px-3  text-gray-900 w-full cursor-pointer",
    "focus:outline-none focus:ring focus:ring-gray-6",
    "disabled:ring disabled:ring-gray-300 disabled:cursor-not-allowed disabled:opacity-50  ",
  ],
  {
    variants: {
      variant: {
        primary: "border rounded-2xl border-gray-400",
        secondary: "border rounded-3xl border-gray-400 disabled:bg-gray-200",
      },
      sizeType: {
        small: "text-base ",
        medium: "text-xl ",
        large: "p-4 text-2xl",
      },
      errorState: {
        false: "",
        true: "border-red-500 focus:border-red-600 focus:ring-red-600 pr-12",
      },
      successState: {
        false: "",
        true: "border-green-500 focus:border-green-600 focus:ring-green-600 pr-12",
      },
      passwordType: {
        false: "",
        true: "pr-12",
      },
      weight: {
        thin: "font-thin",
        normal: "font-normal",
        medium: "font-medium",
        bold: "font-bold",
      },
    },
    defaultVariants: {
      variant: "primary",
      sizeType: "medium",
      weight: "thin",
      errorState: false,
      successState: false,
    },
  }
);

type Props = VariantProps<typeof inputVariants> &
  ComponentProps<"input"> & {
    label?: string;
    error?: string;
    success?: boolean;
    type?: "datetime-local" | "date" | "time";
    titleClassName?: string;
    errorClassName?: string;
    disabled?: boolean;
    handleChangeDate: (value: string) => void;
  };

export function DateTimePicker({
  variant,
  weight,
  label,
  error,
  success,
  sizeType,
  type = "datetime-local",
  disabled = false,
  className = "",
  titleClassName = "",
  errorClassName = "",
  handleChangeDate,
  ...props
}: Props) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={label || "time-picker"}>
          <p
            className={cn(
              labelInputVariants({
                errorState: !!error,
                successState: !!success,
                disabledState: disabled,
                sizeType,
              }),
              titleClassName
            )}
          >
            {label}
          </p>
        </label>
      )}
      <div className="relative">
        <input
          disabled={disabled}
          id={label || "time-picker"}
          type={type}
          className={cn(
            inputVariants({
              variant,
              sizeType,
              weight,
              errorState: !!error,
              successState: !!success,
            }),
            className
          )}
          onChange={(e) => handleChangeDate(e.target.value)}
          {...props}
        />

        {success && (
          <BadgeCheck
            className={cn(
              "absolute top-[calc(50%-0.7rem)] right-4",
              success ? "text-green-600" : "text-gray-400"
            )}
          />
        )}
        {error && (
          <BadgeAlert
            className={cn(
              "absolute top-[50%] translate-y-[-50%] right-4",
              error ? "text-red-600" : "text-gray-400"
            )}
          />
        )}
      </div>
      {error && (
        <p className={cn("text-red-600 text-xs", errorClassName)}>{error}</p>
      )}
    </div>
  );
}
