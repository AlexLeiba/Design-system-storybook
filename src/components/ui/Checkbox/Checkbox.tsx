import { type ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import {
  errorMessageVariants,
  labelInputVariants,
} from "../../../../lib/cvaVariants";
import { cn } from "../../../../lib/utilities";

const checkboxVariants = cva("accent-black", {
  variants: {
    sizeType: {
      small: "size-4",
      medium: "size-6",
      large: "size-8",
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
    sizeType: "medium",
    errorState: false,
  },
});

type Props = ComponentProps<"input"> &
  VariantProps<typeof checkboxVariants> & {
    label?: string;
    error?: string;
    success?: boolean;
    classNameLabel?: string;
    classNameError?: string;
    classNameContainerCheckboxAndLabel?: string;
    classNameInputCheckbox?: string;
    defaultChecked?: boolean;
    disabled?: boolean;
    handleChange: (value: boolean) => void;
  };
export function Checkbox({
  label,
  error,
  success,
  sizeType,
  classNameLabel = "",
  classNameError = "",
  defaultChecked = false,
  disabled = false,
  className = "",
  classNameContainerCheckboxAndLabel = "",
  classNameInputCheckbox = "",
  handleChange,

  ...props
}: Props) {
  return (
    <div className={cn("flex flex-col gap-1 items-start", className)}>
      <div
        className={cn(
          "flex gap-2 items-center",
          classNameContainerCheckboxAndLabel
        )}
      >
        <input
          id={label || "checkbox"}
          disabled={disabled}
          defaultChecked={defaultChecked}
          onChange={(e) => handleChange(e.target.checked)}
          className={cn(
            checkboxVariants({
              sizeType,
              errorState: !!error,
              successState: success,
            }),
            classNameInputCheckbox
          )}
          type="checkbox"
          {...props}
        />
        {label && (
          <label htmlFor={label || "checkbox"}>
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
        )}
      </div>
      {error && (
        <p
          className={cn(
            errorMessageVariants({
              sizeType,
            }),
            classNameError
          )}
        >
          {error}
        </p>
      )}
    </div>
  );
}
