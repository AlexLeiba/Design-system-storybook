import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "../../../../lib/utilities";

const imageVariants = cva("rounded-2xl overflow-hidden relative", {
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
});

type Props = VariantProps<typeof imageVariants> &
  ComponentProps<"div"> & {
    imgUrl: string;
    size: "small" | "medium" | "large";
    closeButtonClassName?: string;
    handleClear: () => void;
  };
export function PreviewImage({
  imgUrl,
  size,
  handleClear,
  className = "",
  closeButtonClassName = "",
  ...props
}: Props) {
  return (
    <div
      className={cn(imageVariants({ sizeType: size }), className)}
      {...props}
    >
      <button
        title="delete image"
        className={cn(
          "fize-4 bg-gray-400 rounded-full absolute top-1 right-1 z-20 cursor-pointer hover:opacity-80",
          closeButtonClassName
        )}
      >
        <X onClick={handleClear} className={cn("text-white")} />
      </button>
      <img
        src={imgUrl}
        alt="uploaded-image"
        className="object-cover size-fit w-full h-full"
      />
    </div>
  );
}
