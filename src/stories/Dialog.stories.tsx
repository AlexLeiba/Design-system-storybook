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
}: DialogProps & DialogFooterProps) {
  return (
    <div className="h-[500px]">
      <Dialog
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
  },
  // parameters: {
  //   layout: "fullscreen",
  // },
};

export default meta;

type Story = StoryObj<typeof DialogComponent>;

// SET ARGS PASSED BY CONTROLS
export const DialogDefault: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "This is default Dialog component, the code doesn't show how to use it. If you want to see how to use it, check the code of the examples below.", //additional desc in the auto generated docs.
      },
    },
  },
  args: {
    isOpened: true,
    fullWidth: false,
    buttonDirection: "row",
    buttonPosition: "right",
    variant: "submit",
    cancelButtonTitle: "Cancel",
    submitButtonTitle: "Submit",
  },
};

export const DialogVertical: Story = {
  render: () => (
    <div className="h-[500px]">
      <Dialog isOpened={true} handleCancel={() => {}} handleSubmit={() => {}}>
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
      <Dialog isOpened={true} handleCancel={() => {}} handleSubmit={() => {}}>
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
      <Dialog isOpened={true} handleCancel={() => {}} handleSubmit={() => {}}>
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
