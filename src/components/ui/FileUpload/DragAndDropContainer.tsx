import { cva, type VariantProps } from "class-variance-authority";
import { useState, type ComponentProps } from "react";
import { cn } from "../../../../lib/utilities";

const containerVariants = cva(
  [
    "transition-all duration-200 ease-in-out",
    "border-dotted border-2 p-2 flex justify-center items-center w-full",
    "disabled:cursor-not-allowed disabled:opacity-50 disabled:ring disabled:ring-gray-400 disabled:ring-offset-2 disabled:ring-offset-gray-100 ",
    "focus:outline-none focus:ring focus:ring-black",
    "hover:bg-gray-100 cursor-pointer",
  ],
  {
    variants: {
      sizeType: {
        small: "min-h-[100px] text-base",
        medium: "min-h-[200px] text-xl",
        large: "min-h-[300px] p-4 text-2xl",
      },
      errorState: {
        false: "",
        true: "border-red-500 focus:border-red-600 focus:ring-red-600 pr-12 text-red-600",
      },
      successState: {
        false: "",
        true: "border-green-500 focus:border-green-600 focus:ring-green-600 pr-12 text-green-600",
      },
      isDragging: {
        false: "",
        true: "border-green-500 focus:border-green-600 focus:ring-green-600 pr-12 text-green-600",
      },
    },
  }
);

type Props = VariantProps<typeof containerVariants> &
  ComponentProps<"button"> & {
    size?: "small" | "medium" | "large";
    $title?: string;
    buttonTitle?: string;
    handleClick?: () => void;
  };
export function DragAndDropContainer({
  size = "medium",
  $title = "Drag and drop files here",
  buttonTitle,
  handleClick,
  className = "",
  ...props
}: Props) {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <button
      onClick={handleClick}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={(e) => {
        e.preventDefault();
        setIsDragging(false);
      }}
      onDragEnd={(e) => {
        e.preventDefault();
      }}
      className={cn(
        containerVariants({ sizeType: size, isDragging }),
        className
      )}
      {...props}
    >
      <p>{buttonTitle || $title}</p>
    </button>
  );
}
