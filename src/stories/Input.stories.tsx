import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components/ui/Input/Input";

const meta: Meta<typeof Input> = {
  title: "Example/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    value: { control: "text" },
    title: { control: "text" },
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
    onChange: { action: "check" },
    className: { control: "check" },
    eyeClassName: { control: "check" },
    errorClassName: { control: "check" },
    titleClassName: { control: "check" },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const DefaultInput: Story = {
  args: {
    title: "Input label",
    variant: "primary",
    value: "default input placeholder...",
    sizeType: "medium",
  },
};
export const InputSuccess: Story = {
  args: {
    title: "Input label",
    variant: "primary",
    value: "type here...",
    sizeType: "medium",
    success: true,
  },
};
export const InputError: Story = {
  args: {
    title: "Input label",
    variant: "primary",
    value: "type here...",
    sizeType: "medium",
    error: "Error message",
  },
};
export const InputPassword: Story = {
  args: {
    title: "Input label",
    variant: "primary",
    value: "type here...",
    sizeType: "medium",
    type: "password",
  },
};
export const InputDisabled: Story = {
  args: {
    title: "Input label",
    variant: "primary",
    value: "type here...",
    sizeType: "medium",
    disabled: true,
  },
};
export const InputSmall: Story = {
  args: {
    title: "Input label",
    variant: "primary",
    value: "primary input value...",
    sizeType: "small",
  },
};
export const InputMedium: Story = {
  args: {
    title: "Input label",
    variant: "primary",
    value: "primary input value...",
    sizeType: "medium",
  },
};
export const InputLarge: Story = {
  args: {
    title: "Input label",
    variant: "primary",
    value: "primary input value...",
    sizeType: "large",
  },
};
export const InputTextarea: Story = {
  args: {
    title: "Input label",
    variant: "primary",
    value: "primary input value...",
    sizeType: "large",
    type: "textarea",
  },
};
