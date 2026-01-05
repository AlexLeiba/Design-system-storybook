type ToastType = "error" | "success" | "info" | "warning";
type ToastData = {
  timestamp: number;
  message: string;
  type: ToastType;
};

type ToastPositions =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "top-center"
  | "bottom-center";
type ToastSizes = "small" | "medium" | "large";

export type { ToastType, ToastData, ToastPositions, ToastSizes };
