import { type ComponentProps } from "react";
import { cn } from "../../../../lib/utilities";
import { labelInputVariants } from "../../../../lib/cvaVariants";

type Props = ComponentProps<"p"> & {
  children: string;
  classNameLabel?: string;
  error?: string;
  success?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  label?: string;
};
function Label({
  children,
  classNameLabel = "",
  error,
  success,
  disabled = false,
  size,
  label,
}: Props) {
  return (
    <label htmlFor={label || "label"}>
      <p
        className={cn(
          labelInputVariants({
            errorState: !!error,
            successState: !!success,
            disabledState: disabled,
            sizeType: size,
          }),
          classNameLabel
        )}
      >
        {children}
      </p>
    </label>
  );
}

export default Label;
