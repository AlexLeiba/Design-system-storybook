import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components/ui/Input/Input";

const meta: Meta<typeof Input> = {
  title: "Example/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    value: { control: "text" },
    label: { control: "text" },
    variant: {
      control: "radio",
      options: ["primary", "secondary"],
      defaultValue: "primary",
    },
    sizeType: {
      control: "radio",
      options: ["small", "medium", "large"],
      defaultValue: "medium",
    },
    disabled: { control: "boolean" },
    onChange: {
      action: "check",
      description:
        "onChange handler which will return the value stored under the <b>name attribute</b> and accessible via event.target.value",
    },
    className: { control: "check", description: "Input container class" },
    classNameEye: { control: "check" },
    classNameError: { control: "check" },
    classNameLabel: { control: "check" },
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

type Story = StoryObj<typeof Input>;

export const DefaultInput: Story = {
  args: {
    label: "Input label",
    variant: "primary",
    value: "default input placeholder...",
    sizeType: "medium",
  },
};
export const InputSuccess: Story = {
  args: {
    label: "Input label",
    variant: "primary",
    value: "type here...",
    sizeType: "medium",
    success: true,
  },
};
export const InputError: Story = {
  args: {
    label: "Input label",
    variant: "primary",
    value: "type here...",
    sizeType: "medium",
    error: "Error message",
  },
};
export const InputPassword: Story = {
  args: {
    label: "Input label",
    variant: "primary",
    value: "type here...",
    sizeType: "medium",
    type: "password",
  },
};
export const InputDisabled: Story = {
  args: {
    label: "Input label",
    variant: "primary",
    value: "type here...",
    sizeType: "medium",
    disabled: true,
  },
};
export const InputSmall: Story = {
  args: {
    label: "Input label",
    variant: "primary",
    value: "primary input value...",
    sizeType: "small",
  },
};
export const InputMedium: Story = {
  args: {
    label: "Input label",
    variant: "primary",
    value: "primary input value...",
    sizeType: "medium",
  },
};
export const InputLarge: Story = {
  args: {
    label: "Input label",
    variant: "primary",
    value: "primary input value...",
    sizeType: "large",
  },
};
export const InputTextarea: Story = {
  args: {
    label: "Input label",
    variant: "primary",
    value: "primary input value...",
    sizeType: "large",
    type: "textarea",
  },
};
