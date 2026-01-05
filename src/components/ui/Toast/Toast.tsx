import { useContext, type ComponentProps } from "react";

import { ToastBadge } from "./ToastBadge";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../../lib/utilities";
import { BadgeAlert, BadgeCheck, BadgeInfo, X } from "lucide-react";

import { ToastContext } from "./Context";
import type { ToastPositions, ToastSizes } from "./types";

const toastContainerVariants = cva(
  "w-fit absolute z-50 inline-flex  flex-col items-center gap-2",
  {
    variants: {
      position: {
        "top-left": "left-2 items-start",
        "top-center": "left-1/2  -translate-x-1/2  ",
        "top-right": "right-2 items-end",
        "bottom-left": "bottom-2 left-2 items-start",
        "bottom-center": "bottom-2 left-1/2 -translate-x-1/2  ",
        "bottom-right": "bottom-2 right-2  items-end",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    compoundVariants: [
      {
        position: ["top-left", "bottom-left", "bottom-right", "top-right"],
        fullWidth: true,
        class: "left-0 right-0",
      },
    ],
    defaultVariants: {
      position: "top-right",
    },
  }
);

type ToastProps = ComponentProps<"div"> &
  VariantProps<typeof toastContainerVariants> & {
    classNameToastBadge?: string;
    sizeType?: ToastSizes;
    fullWidth?: boolean;
    position?: ToastPositions;
  };

const badges = {
  error: <BadgeAlert />,
  info: <BadgeInfo />,
  success: <BadgeCheck />,
  warning: <BadgeAlert />,
};
export function Toast({
  className = "",
  classNameToastBadge = "",
  sizeType = "medium",
  fullWidth = false,
  position = "top-center",
}: ToastProps) {
  const { toastData, setToastData } = useContext(ToastContext);

  function handleCloseToast(timestamp: number) {
    setToastData((prev) => {
      return prev.filter((data) => data.timestamp !== timestamp);
    });
  }

  return (
    <div
      className={cn(toastContainerVariants({ position, fullWidth }), className)}
    >
      {toastData.map((data) => {
        return (
          <ToastBadge
            className={cn(classNameToastBadge)}
            key={data.timestamp}
            type={data.type}
            sizeType={sizeType}
            fullWidth={fullWidth}
          >
            <div className="absolute left-2 top-1/2 translate-y-[-50%] ">
              {badges[data.type]}
            </div>

            <p> {data.message}</p>
            <button
              onClick={() => handleCloseToast(data.timestamp)}
              title={`close ${data.type} toast`}
              className="absolute right-2 top-1/2 translate-y-[-50%] cursor-pointer hover:opacity-70"
            >
              <X />
            </button>
          </ToastBadge>
        );
      })}
    </div>
  );
}
