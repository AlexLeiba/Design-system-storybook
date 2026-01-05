import type { StoryObj, Meta } from "@storybook/react";
import { Radio } from "../components/ui/Radio/Radio";
import { Toast } from "../components/ui/Toast/Toast";
import { ToastProvider } from "../components/ui/Toast/Context";
import { useToast } from "../components/ui/Toast/useToast";
import { Button } from "../components/ui/Button/Button";

function TestToast() {
  const { handler } = useToast(1000);
  return (
    <div className="flex gap-2 ">
      <Button
        variant={"destructive"}
        onClick={() => handler("Error toast message", "error")}
      >
        Trigger error toast
      </Button>
      <Button
        variant={"primary"}
        onClick={() => handler("Info toast message", "info")}
      >
        Trigger info toast
      </Button>
      <Button
        variant={"secondary"}
        onClick={() => handler("Warning toast message", "warning")}
      >
        Trigger warning toast
      </Button>
      <Button
        variant={"primary"}
        className="bg-green-600"
        onClick={() => handler("Success toast message", "success")}
      >
        Trigger success toast
      </Button>
    </div>
  );
}

export function ToastDefault() {
  return (
    <div className="h-[300px]">
      <ToastProvider>
        <Toast className="" classNameToastBadge="" />
        <TestToast />
      </ToastProvider>
    </div>
  );
}

const meta: Meta = {
  title: "Example/Toast",
  component: Toast,
  tags: ["autodocs"],
  argTypes: {
    sizeType: {
      control: "radio",
      options: ["small", "medium", "large"],
      defaultValue: "medium",
    },
    fullWidth: {
      control: "boolean",
      defaultValue: false,
    },
    position: {
      control: "radio",
      options: [
        "top-left",
        "top-center",
        "top-right",
        "bottom-left",
        "bottom-center",
        "bottom-right",
      ],
      defaultValue: "top-center",
    },

    classNameToastBadge: { control: "check" },
    className: { control: "check", description: "Toast container className" },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Check out the <b>code usage</b> and all <b>props</b>  by clicking the button below : <b>Show code</b>",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export function ToastTopLeft() {
  return (
    <div className="h-[300px]">
      <ToastProvider>
        <Toast
          sizeType="medium"
          position={"top-left"}
          className=""
          classNameToastBadge=""
        />
        <TestToast />
      </ToastProvider>
    </div>
  );
}
export function ToastTopRight() {
  return (
    <div className="h-[300px]">
      <ToastProvider>
        <Toast
          sizeType="medium"
          position={"top-right"}
          className=""
          classNameToastBadge=""
        />
        <TestToast />
      </ToastProvider>
    </div>
  );
}
export function ToastTopCenter() {
  return (
    <div className="h-[300px]">
      <ToastProvider>
        <Toast
          sizeType="medium"
          position={"top-center"}
          className=""
          classNameToastBadge=""
        />
        <TestToast />
      </ToastProvider>
    </div>
  );
}
export function ToastBottomLeft() {
  return (
    <div className="h-[300px]">
      <ToastProvider>
        <Toast
          sizeType="medium"
          position={"bottom-left"}
          className=""
          classNameToastBadge=""
        />
        <TestToast />
      </ToastProvider>
    </div>
  );
}
export function ToastBottomRight() {
  return (
    <div className="h-[300px]">
      <ToastProvider>
        <Toast
          sizeType="medium"
          position={"bottom-right"}
          className=""
          classNameToastBadge=""
        />
        <TestToast />
      </ToastProvider>
    </div>
  );
}
export function ToastBottomCenter() {
  return (
    <div className="h-[300px]">
      <ToastProvider>
        <Toast
          sizeType="medium"
          position={"bottom-center"}
          className=""
          classNameToastBadge=""
        />
        <TestToast />
      </ToastProvider>
    </div>
  );
}
export function ToastFullWidth() {
  return (
    <div className="h-[300px]">
      <ToastProvider>
        <Toast
          sizeType="medium"
          className=""
          classNameToastBadge=""
          fullWidth
        />
        <TestToast />
      </ToastProvider>
    </div>
  );
}
