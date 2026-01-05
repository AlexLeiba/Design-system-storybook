import { useContext, useEffect } from "react";
import { ToastContext } from "./Context";
import type { ToastType } from "./types";

export function useToast(lifetime: number = 2000) {
  const { toastData, setToastData } = useContext(ToastContext);
  console.log("🚀 ~ useToast ~ toastData:", toastData);

  useEffect(() => {
    if (toastData && toastData.length > 0) {
      let timeoutId = setTimeout(() => {
        handleDeleteToast();
      }, lifetime);

      return () => clearTimeout(timeoutId);
    }
  }, [toastData]);

  function handleDeleteToast() {
    setToastData((prev) => {
      return prev.slice(1);
    });
  }

  function handler(message: string, type: ToastType) {
    const newToast = { message, type, timestamp: Date.now() };
    setToastData((prev) => [...prev, newToast]);
  }

  return { handler };
}
