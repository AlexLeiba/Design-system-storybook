import { cva, type VariantProps } from "class-variance-authority";
import React, { forwardRef, type ComponentProps } from "react";
import { Loader } from "../../animations/Loader";
import { cn } from "../../../../lib/utilities";

const buttonVariants = cva(
  [
    "text-xl",
    "py-2 px-2 cursor-pointer inline-block rounded-xl",
    "focus-within:outline-none focus-within:ring  focus:ring-offset-2 focus:ring-offset-gray-100",
    "hover:opacity-80",
    "disabled:cursor-not-allowed disabled:opacity-50 ",
    "transition-all duration-200 ease-in-out",
    "inline-flex items-center justify-center gap-2",
  ],
  {
    variants: {
      size: {
        small: "px-4",
        large: "px-8 py-4 text-2xl",
        medium: "px-6 ",
      },
      variant: {
        primary: "bg-gray-800 text-gray-100   focus:ring-gray-500",
        secondary: "bg-yellow-400 text-gray-900  focus:ring-gray-500",
        destructive: "bg-red-600 text-gray-100   focus:ring-gray-500",
        tertiary: "bg-purple-800  text-gray-100  focus:ring-gray-500",
        ghost: " text-gray-800  focus:ring-gray-500 bg-transparent",
        link: " text-gray-800  bg-transparent hover:underline p-0",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      size: "medium",
      variant: "primary",
      fullWidth: false,
    },
  }
);

const loadingVariants = cva("opacity-100", {
  variants: {
    loadingState: {
      true: "opacity-0!",
      false: "opacity-100",
    },
  },
});

type Props = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean;
    iconRight?: React.ReactNode;
    iconLeft?: React.ReactNode;
  };

React.createElement("div", { children: "hello" }, "hello");

export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      size,
      variant,
      className = "",
      fullWidth,
      loading = false,
      iconLeft,
      iconRight,
      ...props
    }: Props,
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ size, variant, fullWidth }), className)}
        {...props}
      >
        {iconLeft && <div className="mr-1">{iconLeft}</div>}
        <div className="relative">
          <Loader visibility={loading} variant={variant} />
          <span className={loadingVariants({ loadingState: loading })}>
            {children}
          </span>
        </div>
        {iconRight && <div className="ml-1">{iconRight}</div>}
      </button>
    );
  }
);
