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
        <DialogHeader>
          <h2 className="text-2xl">Dialog Title</h2>
        </DialogHeader>

        <DialogBody>
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
      control: "boolean",
      defaultValue: true,
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
      control: "boolean",
      defaultValue: false,
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

export const DialogExample: Story = {
  render: (args) =>
    DialogComponent({ ...args, withClickOutside: false, isOpened: true }),
};

export const DialogVertical: Story = {
  render: () => (
    <div className="h-[500px]">
      <Dialog
        withClickOutside={false}
        isOpened={true}
        handleCancel={() => {}}
        handleSubmit={() => {}}
      >
        <DialogHeader>
          <h2 className="text-2xl">Dialog Title</h2>
        </DialogHeader>

        <DialogBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nulla,
          nesciunt facilis tempora at non modi reiciendis magnam aliquid
          consequatur?
        </DialogBody>

        <DialogFooter
          variant={"submit"}
          fullWidth={false}
          buttonDirection={"column"}
          cancelButtonTitle={"Cancel"}
          submitButtonTitle={"Submit"}
          buttonPosition={"right"}
        />
      </Dialog>
    </div>
  ),
};
export const DialogHorizontal: Story = {
  render: () => (
    <div className="h-[500px]">
      <Dialog
        isOpened={true}
        withClickOutside={false}
        handleCancel={() => {}}
        handleSubmit={() => {}}
      >
        <DialogHeader>
          <h2 className="text-2xl">Dialog Title</h2>
        </DialogHeader>

        <DialogBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nulla,
          nesciunt facilis tempora at non modi reiciendis magnam aliquid
          consequatur?
        </DialogBody>

        <DialogFooter
          variant={"submit"}
          fullWidth={false}
          buttonDirection={"row"}
          cancelButtonTitle={"Cancel"}
          submitButtonTitle={"Submit"}
          buttonPosition={"right"}
        />
      </Dialog>
    </div>
  ),
};

export const DialogDelete: Story = {
  render: () => (
    <div className="h-[500px]">
      <Dialog
        withClickOutside={false}
        isOpened={true}
        handleCancel={() => {}}
        handleSubmit={() => {}}
      >
        <DialogHeader>
          <h2 className="text-2xl">Dialog Title</h2>
        </DialogHeader>

        <DialogBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nulla,
          nesciunt facilis tempora at non modi reiciendis magnam aliquid
          consequatur?
        </DialogBody>

        <DialogFooter
          variant={"delete"}
          fullWidth={true}
          buttonDirection={"row"}
          cancelButtonTitle={"Cancel"}
          submitButtonTitle={"Submit"}
          buttonPosition={"right"}
        />
      </Dialog>
    </div>
  ),
};
