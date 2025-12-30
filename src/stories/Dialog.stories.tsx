import type { StoryObj, Meta } from "@storybook/react";
import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  type DialogFooterProps,
  type DialogProps,
} from "../components/ui/Dialog/Dialog";

function DialogComponent({
  fullWidth,
  buttonDirection,
  buttonPosition,
  cancelButtonTitle,
  submitButtonTitle,
  variant,
  isOpened,
  disabled,
  loading,
  withClickOutside,
}: DialogProps & DialogFooterProps) {
  return (
    <div className="h-[500px]">
      <Dialog
        withClickOutside={withClickOutside}
        isOpened={isOpened}
        handleCancel={() => {}}
        handleSubmit={() => {}}
      >
        <DialogHeader closeButtonClassName="">
          <h2 className="text-2xl">Dialog Title</h2>
        </DialogHeader>

        <DialogBody className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nulla,
          nesciunt facilis tempora at non modi reiciendis magnam aliquid
          consequatur?
        </DialogBody>

        <DialogFooter
          disabled={disabled}
          loading={loading}
          variant={variant}
          fullWidth={fullWidth}
          buttonDirection={buttonDirection}
          cancelButtonTitle={cancelButtonTitle}
          submitButtonTitle={submitButtonTitle}
          buttonPosition={buttonPosition}
        />
      </Dialog>
    </div>
  );
}

const meta: Meta = {
  title: "Example/Dialog",
  component: DialogComponent,
  tags: ["autodocs"],
  argTypes: {
    isOpened: {
      control: "check",
      defaultValue: true,
      description: "<b>boolean prop</b>  used to open the dialog or close",
    },
    fullWidth: {
      control: "boolean",
      defaultValue: false,
    },
    buttonDirection: {
      control: "radio",
      options: ["row", "column"],
    },
    buttonPosition: {
      control: "radio",
      options: ["left", "right"],
    },
    variant: {
      control: "radio",
      options: ["delete", "submit"],
    },
    cancelButtonTitle: {
      control: "text",
      defaultValue: "Cancel",
    },
    submitButtonTitle: {
      control: "text",
      defaultValue: "Submit",
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
    loading: {
      control: "boolean",
      defaultValue: false,
    },
    withClickOutside: {
      control: "check",
      defaultValue: false,
      description:
        "<b>boolean prop</b> detects if the user clicks  outside to close the dialog",
    },
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

type Story = StoryObj<typeof DialogComponent>;

export const DialogDefault: Story = {
  render: (args) =>
    DialogComponent({ ...args, withClickOutside: false, isOpened: true }),
};
export const DialogVertical: Story = {
  render: (args) =>
    DialogComponent({
      ...args,
      withClickOutside: false,
      isOpened: true,
      variant: "submit",
      buttonDirection: "column",
      buttonPosition: "right",
    }),
};
export const DialogHorizontalFullWidth: Story = {
  render: (args) =>
    DialogComponent({
      ...args,
      withClickOutside: false,
      isOpened: true,
      variant: "submit",
      buttonDirection: "row",
      buttonPosition: "right",
      fullWidth: true,
    }),
};
export const DialogHorizontalRight: Story = {
  render: (args) =>
    DialogComponent({
      ...args,
      withClickOutside: false,
      isOpened: true,
      variant: "submit",
      buttonDirection: "row",
      buttonPosition: "right",
    }),
};
export const DialogHorizontalLeft: Story = {
  render: (args) =>
    DialogComponent({
      ...args,
      withClickOutside: false,
      isOpened: true,
      variant: "submit",
      buttonDirection: "row",
      buttonPosition: "left",
    }),
};
export const DialogDelete: Story = {
  render: (args) =>
    DialogComponent({
      ...args,
      withClickOutside: false,
      isOpened: true,
      variant: "delete",
      buttonDirection: "row",
      buttonPosition: "right",
    }),
};
