import {
  createContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import type { ToastData } from "./types";

type ToastContextType = {
  toastData: ToastData[];
  setToastData: Dispatch<SetStateAction<ToastData[]>>;
};
export const ToastContext = createContext<ToastContextType>({
  toastData: [],
  setToastData: () => {},
});

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toastData, setToastData] = useState<ToastData[]>([]);

  return (
    <ToastContext.Provider value={{ toastData, setToastData }}>
      {children}
    </ToastContext.Provider>
  );
}
