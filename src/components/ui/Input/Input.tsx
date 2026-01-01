import { forwardRef, useState, type ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { BadgeAlert, BadgeCheck, Eye, EyeClosed } from "lucide-react";
import { labelInputVariants } from "../../../../lib/cvaVariants";
import { cn } from "../../../../lib/utilities";

const inputVariants = cva(
  [
    "py-2 px-3  text-gray-900 w-full",
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
  ComponentProps<"input"> &
  ComponentProps<"textarea"> & {
    title: string;
    error?: string;
    success?: boolean;
    type?: "number" | "text" | "password" | "textarea";
    titleClassName?: string;
    errorClassName?: string;
    eyeClassName?: string;
    disabled?: boolean;
  };

export const Input = forwardRef<HTMLInputElement, Props>(
  ({
    variant,
    weight,
    title,
    error,
    success,
    sizeType,
    type,
    disabled = false,
    className = "",
    titleClassName = "",
    errorClassName = "",
    eyeClassName = "",
    ...props
  }: Props) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
      <div className="flex flex-col gap-1">
        <label htmlFor="input">
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
            {title}
          </p>
        </label>
        <div className="relative">
          {type === "textarea" ? (
            <textarea
              disabled={disabled}
              rows={4}
              id="input"
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
              {...props}
            />
          ) : (
            <input
              disabled={disabled}
              id="input"
              type={
                type === "password"
                  ? showPassword
                    ? "text"
                    : "password"
                  : type
              }
              className={cn(
                inputVariants({
                  variant,
                  sizeType,
                  weight,
                  errorState: !!error,
                  successState: !!success,
                  passwordType: type === "password",
                }),
                className
              )}
              {...props}
            />
          )}
          {type === "password" && !success && (
            <>
              {showPassword ? (
                <button
                  disabled={disabled}
                  onClick={() => setShowPassword(false)}
                  className={cn(
                    "absolute top-[calc(50%-0.7rem)] right-4 cursor-pointer hover:opacity-80 disabled:cursor-not-allowed",
                    success ? "text-green-600" : "text-gray-400",
                    eyeClassName
                  )}
                >
                  <Eye />
                </button>
              ) : (
                <button
                  disabled={disabled}
                  onClick={() => setShowPassword(true)}
                  className={cn(
                    "absolute top-[calc(50%-0.7rem)] right-4 cursor-pointer hover:opacity-80 disabled:cursor-not-allowed ",
                    success ? "text-green-600" : "text-gray-400",
                    eyeClassName
                  )}
                >
                  <EyeClosed />
                </button>
              )}
            </>
          )}
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
);
