import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "../../../../lib/utilities";

const imageVariants = cva(
  "rounded-2xl overflow-hidden relative border-2 border-gray-500 p-2",
  {
    variants: {
      sizeType: {
        small: "size-[100px]",
        medium: "size-[120px]",
        large: "size-[150px]",
      },
    },
    defaultVariants: {
      sizeType: "small",
    },
  }
);

type Props = VariantProps<typeof imageVariants> &
  ComponentProps<"div"> & {
    fileUrl: string;
    fileName: string;
    size: "small" | "medium" | "large";
    closeButtonClassName?: string;
    handleClear: () => void;
  };
export function PreviewFile({
  fileUrl,
  fileName,
  size,
  className = "",
  closeButtonClassName = "",
  handleClear,
  ...props
}: Props) {
  return (
    <div
      className={cn(imageVariants({ sizeType: size }), className)}
      {...props}
    >
      <button
        title="delete file"
        className={cn(
          "fize-4 bg-gray-400 rounded-full absolute top-1 right-1 z-20 cursor-pointer hover:opacity-80",
          closeButtonClassName
        )}
      >
        <X onClick={handleClear} className="text-white" />
      </button>

      <a href={fileUrl} download={fileName}>
        <span className="line-clamp-3">{fileName}</span>
      </a>
    </div>
  );
}
