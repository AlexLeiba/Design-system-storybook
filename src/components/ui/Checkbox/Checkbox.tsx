import { type ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import {
  errorMessageVariants,
  labelInputVariants,
} from "../../../../lib/cvaVariants";
import { cn } from "../../../../lib/utilities";

const checkboxVariants = cva("", {
  variants: {
    sizeType: {
      small: "w-4 h-4",
      medium: "w-6 h-6",
      large: "w-8 h-8",
    },
    errorState: {
      false: "",
      true: "border-red-500 focus:border-red-600 focus:ring-red-600 pr-12",
    },
  },
  defaultVariants: {
    sizeType: "medium",
    errorState: false,
  },
});

type Props = ComponentProps<"input"> &
  VariantProps<typeof checkboxVariants> & {
    title?: string;
    error?: string;
    success?: boolean;
    titleClassName?: string;
    errorClassName?: string;
  };
export function Checkbox({
  title,
  error,
  success,
  sizeType,
  titleClassName = "",
  errorClassName = "",
  ...props
}: Props) {
  return (
    <div className="flex flex-col gap-1 items-start">
      <label htmlFor={props.id || "checkbox"}>
        {title && (
          <p
            className={cn(
              labelInputVariants({
                errorState: !!error,
                successState: !!success,
              }),
              titleClassName
            )}
          >
            {title}
          </p>
        )}
      </label>

      <input
        className={checkboxVariants({ sizeType, errorState: !!error })}
        id="checkbox"
        {...props}
        type="checkbox"
      />

      {error && (
        <p
          className={cn(
            errorMessageVariants({
              className: errorClassName,
              sizeType,
            }),
            errorClassName
          )}
        >
          {error}
        </p>
      )}
    </div>
  );
}
