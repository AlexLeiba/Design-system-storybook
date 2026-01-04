import type { StoryObj, Meta } from "@storybook/react";
import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  type DialogFooterProps,
  type DialogProps,
} from "../components/ui/Dialog/Dialog";
import { useState } from "react";
import { Button } from "../components/ui/Button/Button";

function DialogComponent({
  fullWidth,
  buttonDirection,
  buttonPosition,
  cancelButtonTitle,
  submitButtonTitle,
  variant,
  disabled,
  loading,
  withClickOutside,
}: DialogProps & DialogFooterProps) {
  const [showDialog, setShowDialog] = useState(true);

  return (
    <div className="h-[500px]">
      <Button onClick={() => setShowDialog(true)}>Open Dialog</Button>

      <Dialog
        className=""
        withClickOutside={withClickOutside}
        isOpened={showDialog}
        handleCancel={() => setShowDialog(false)}
        handleSubmit={() => setShowDialog(false)}
        handleClose={() => setShowDialog(false)}
      >
        <DialogHeader classNameCloseButton="" className="">
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
          classNameCancelButton=""
          classNameSubmitButton=""
          className=""
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
      defaultValue: false,
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
        "<b>boolean prop</b> detects if the user clicks  outside to close the dialog, for testing purposes only, is set to false in order to keep the dialog visible while ",
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
  render: (args) => {
    const {
      fullWidth,
      buttonDirection,
      buttonPosition,
      cancelButtonTitle,
      submitButtonTitle,
      variant,
      disabled,
      loading,
    } = args;
    const [showDialog, setShowDialog] = useState(false);

    return (
      <div className="h-[500px]">
        <Button onClick={() => setShowDialog(true)}>Open Dialog</Button>

        <Dialog
          className=""
          withClickOutside={false}
          isOpened={showDialog}
          handleCancel={() => setShowDialog(false)}
          handleSubmit={() => setShowDialog(false)}
          handleClose={() => setShowDialog(false)}
        >
          <DialogHeader classNameCloseButton="" className="">
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
            classNameCancelButton=""
            classNameSubmitButton=""
            className=""
          />
        </Dialog>
      </div>
    );
  },
};

export const DialogVertical: Story = {
  render: () => {
    const [showDialog, setShowDialog] = useState(true);

    return (
      <div className="h-[500px]">
        <Button onClick={() => setShowDialog(true)}>Open Dialog</Button>

        <Dialog
          className=""
          withClickOutside={true}
          isOpened={showDialog}
          handleCancel={() => setShowDialog(false)}
          handleSubmit={() => setShowDialog(false)}
          handleClose={() => setShowDialog(false)}
        >
          <DialogHeader classNameCloseButton="" className="">
            <h2 className="text-2xl">Dialog Title</h2>
          </DialogHeader>

          <DialogBody className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nulla,
            nesciunt facilis tempora at non modi reiciendis magnam aliquid
            consequatur?
          </DialogBody>

          <DialogFooter
            disabled={false}
            loading={false}
            variant={"submit"}
            fullWidth={false}
            buttonDirection={"column"}
            cancelButtonTitle={"Cancel"}
            submitButtonTitle={"Submit"}
            buttonPosition={"right"}
            classNameCancelButton=""
            classNameSubmitButton=""
            className=""
          />
        </Dialog>
      </div>
    );
  },
};

export const DialogHorizontalFullWidth: Story = {
  render: () => {
    const [showDialog, setShowDialog] = useState(true);

    return (
      <div className="h-[500px]">
        <Button onClick={() => setShowDialog(true)}>Open Dialog</Button>

        <Dialog
          className=""
          withClickOutside={true}
          isOpened={showDialog}
          handleCancel={() => setShowDialog(false)}
          handleSubmit={() => setShowDialog(false)}
          handleClose={() => setShowDialog(false)}
        >
          <DialogHeader classNameCloseButton="" className="">
            <h2 className="text-2xl">Dialog Title</h2>
          </DialogHeader>

          <DialogBody className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nulla,
            nesciunt facilis tempora at non modi reiciendis magnam aliquid
            consequatur?
          </DialogBody>

          <DialogFooter
            disabled={false}
            loading={false}
            variant={"submit"}
            fullWidth={true}
            buttonDirection={"row"}
            cancelButtonTitle={"Cancel"}
            submitButtonTitle={"Submit"}
            buttonPosition={"right"}
            classNameCancelButton=""
            classNameSubmitButton=""
            className=""
          />
        </Dialog>
      </div>
    );
  },
};

export const DialogHorizontalRight: Story = {
  render: () => {
    const [showDialog, setShowDialog] = useState(true);

    return (
      <div className="h-[500px]">
        <Button onClick={() => setShowDialog(true)}>Open Dialog</Button>

        <Dialog
          className=""
          withClickOutside={true}
          isOpened={showDialog}
          handleCancel={() => setShowDialog(false)}
          handleSubmit={() => setShowDialog(false)}
          handleClose={() => setShowDialog(false)}
        >
          <DialogHeader classNameCloseButton="" className="">
            <h2 className="text-2xl">Dialog Title</h2>
          </DialogHeader>

          <DialogBody className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nulla,
            nesciunt facilis tempora at non modi reiciendis magnam aliquid
            consequatur?
          </DialogBody>

          <DialogFooter
            disabled={false}
            loading={false}
            variant={"submit"}
            fullWidth={false}
            buttonDirection={"row"}
            cancelButtonTitle={"Cancel"}
            submitButtonTitle={"Submit"}
            buttonPosition={"right"}
            classNameCancelButton=""
            classNameSubmitButton=""
            className=""
          />
        </Dialog>
      </div>
    );
  },
};

export const DialogHorizontalLeft: Story = {
  render: () => {
    const [showDialog, setShowDialog] = useState(true);

    return (
      <div className="h-[500px]">
        <Button onClick={() => setShowDialog(true)}>Open Dialog</Button>

        <Dialog
          className=""
          withClickOutside={true}
          isOpened={showDialog}
          handleCancel={() => setShowDialog(false)}
          handleSubmit={() => setShowDialog(false)}
          handleClose={() => setShowDialog(false)}
        >
          <DialogHeader classNameCloseButton="" className="">
            <h2 className="text-2xl">Dialog Title</h2>
          </DialogHeader>

          <DialogBody className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nulla,
            nesciunt facilis tempora at non modi reiciendis magnam aliquid
            consequatur?
          </DialogBody>

          <DialogFooter
            disabled={false}
            loading={false}
            variant={"submit"}
            fullWidth={false}
            buttonDirection={"row"}
            cancelButtonTitle={"Cancel"}
            submitButtonTitle={"Submit"}
            buttonPosition={"left"}
            classNameCancelButton=""
            classNameSubmitButton=""
            className=""
          />
        </Dialog>
      </div>
    );
  },
};

export const DialogDelete: Story = {
  render: () => {
    const [showDialog, setShowDialog] = useState(true);

    return (
      <div className="h-[500px]">
        <Button onClick={() => setShowDialog(true)}>Open Dialog</Button>

        <Dialog
          className=""
          withClickOutside={true}
          isOpened={showDialog}
          handleCancel={() => setShowDialog(false)}
          handleSubmit={() => setShowDialog(false)}
          handleClose={() => setShowDialog(false)}
        >
          <DialogHeader classNameCloseButton="" className="">
            <h2 className="text-2xl">Dialog Title</h2>
          </DialogHeader>

          <DialogBody className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nulla,
            nesciunt facilis tempora at non modi reiciendis magnam aliquid
            consequatur?
          </DialogBody>

          <DialogFooter
            disabled={false}
            loading={false}
            variant={"delete"}
            fullWidth={false}
            buttonDirection={"row"}
            cancelButtonTitle={"Cancel"}
            submitButtonTitle={"Submit"}
            buttonPosition={"right"}
            classNameCancelButton=""
            classNameSubmitButton=""
            className=""
          />
        </Dialog>
      </div>
    );
  },
};
