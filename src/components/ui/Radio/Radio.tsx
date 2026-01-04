import { type ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { labelInputVariants } from "../../../../lib/cvaVariants";
import { cn } from "../../../../lib/utilities";

const radioVariants = cva("accent-black", {
  variants: {
    sizeType: {
      small: "w-4 h-4",
      medium: "w-6 h-6",
      large: "w-8 h-8",
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

type Props = ComponentProps<"input"> &
  VariantProps<typeof radioVariants> & {
    label: string;
    error?: string;
    success?: boolean;
    classNameLabel?: string;
    classNameRadioInput?: string;
    classNameError?: string;
    classNameContainerCheckboxAndLabel?: string;
    disabled?: boolean;
    handleChange: (value: string) => void;
  };

export function Radio({
  label,
  error,
  success,
  sizeType,
  className = "",
  classNameRadioInput = "",
  classNameLabel = "",
  classNameError = "",
  classNameContainerCheckboxAndLabel = "",
  disabled,
  handleChange,
  ...props
}: Props) {
  return (
    <div className={cn("flex-col gap-1", className)}>
      <div
        className={cn(
          "flex gap-2 items-center",
          classNameContainerCheckboxAndLabel
        )}
      >
        <input
          disabled={disabled}
          className={cn(
            radioVariants({
              sizeType,
              errorState: !!error,
              successState: !!success,
            }),
            classNameRadioInput
          )}
          type="radio"
          id={label}
          onChange={(e) => handleChange(e.target.value)}
          {...props}
        />
        <label htmlFor={label}>
          <p
            className={cn(
              labelInputVariants({
                errorState: !!error,
                successState: !!success,
                sizeType,
                disabledState: disabled,
              }),
              classNameLabel
            )}
          >
            {label}
          </p>
        </label>
      </div>
      {error && (
        <p className={cn("text-sm text-red-600", classNameError)}>{error}</p>
      )}
    </div>
  );
}
