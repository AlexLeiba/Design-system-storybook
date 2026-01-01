import { type ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { labelInputVariants } from "../../../../lib/cvaVariants";
import { cn } from "../../../../lib/utilities";

const radioVariants = cva("", {
  variants: {
    sizeType: {
      small: "w-4 h-4",
      medium: "w-6 h-6",
      large: "w-8 h-8",
    },
  },
  defaultVariants: {
    sizeType: "small",
  },
});

type Props = ComponentProps<"input"> &
  VariantProps<typeof radioVariants> & {
    title: string;
    error?: string;
    success?: boolean;
    classNameLabel?: string;
    classNameInput?: string;
    classNameError?: string;
    disabled?: boolean;
    // sizee?: "small" | "medium" | "large";
  };

export function Radio({
  title,
  error,
  success,
  sizeType,
  className = "",
  classNameInput = "",
  classNameLabel = "",
  classNameError = "",
  disabled,
  ...props
}: Props) {
  return (
    <div className={cn("flex-col gap-1", className)}>
      <label htmlFor={title}>
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
          {title}
        </p>
      </label>
      <input
        disabled={disabled}
        className={cn(radioVariants({ sizeType }), classNameInput)}
        type="radio"
        id={title}
        {...props}
      />
      {error && (
        <p className={cn("text-sm text-red-600", classNameError)}>{error}</p>
      )}
    </div>
  );
}
