import type { Meta, StoryObj } from "@storybook/react";
import { NativeSelect } from "../components/ui/NativeSelect/NativeSelect";

const meta: Meta<typeof NativeSelect> = {
  title: "Example/NativeSelect",
  component: NativeSelect,
  tags: ["autodocs"],
  argTypes: {
    value: { control: "text" },
    label: { control: "text" },
    options: {
      control: "select",
      defaultValue: [
        {
          value: "value1",
          label: "label1",
        },
        {
          value: "value2",
          label: "label2",
        },
        {
          value: "value3",
          label: "label3",
        },
      ],
    },

    sizeType: {
      control: "radio",
      options: ["small", "medium", "large"],
      defaultValue: "medium",
    },
    disabled: { control: "boolean" },
    handleSelectValue: {
      action: "check",
      description:
        "handleSelectValue handler which will return the value selected and stored under the <b>name attribute</b>",
    },
    className: { control: "check", description: "Select container class" },
    classNameError: { control: "check" },
    classNameLabel: { control: "check" },
    classNameSelectInput: { control: "check" },
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

type Story = StoryObj<typeof NativeSelect>;

export const DefaultSelect: Story = {
  args: {
    label: "Select label",

    value: "default Select placeholder...",
    sizeType: "medium",
    options: [
      {
        value: "value1",
        label: "label1",
      },
      {
        value: "value2",
        label: "label2",
      },
      {
        value: "value3",
        label: "label3",
      },
    ],
    className: "",
    classNameError: "",
    classNameLabel: "",
    classNameSelectInput: "",
  },
};
export const SelectSuccess: Story = {
  args: {
    label: "Select label",

    value: "type here...",
    sizeType: "medium",
    success: true,
    options: [
      {
        value: "value1",
        label: "label1",
      },
      {
        value: "value2",
        label: "label2",
      },
      {
        value: "value3",
        label: "label3",
      },
    ],
    className: "",
    classNameError: "",
    classNameLabel: "",
    classNameSelectInput: "",
  },
};
export const SelectError: Story = {
  args: {
    label: "Select label",

    value: "type here...",
    sizeType: "medium",
    error: "Error message",
    options: [
      {
        value: "value1",
        label: "label1",
      },
      {
        value: "value2",
        label: "label2",
      },
      {
        value: "value3",
        label: "label3",
      },
    ],
    className: "",
    classNameError: "",
    classNameLabel: "",
    classNameSelectInput: "",
  },
};

export const SelectDisabled: Story = {
  args: {
    label: "Select label",

    value: "type here...",
    sizeType: "medium",
    disabled: true,
    options: [
      {
        value: "value1",
        label: "label1",
      },
      {
        value: "value2",
        label: "label2",
      },
      {
        value: "value3",
        label: "label3",
      },
    ],
    className: "",
    classNameError: "",
    classNameLabel: "",
    classNameSelectInput: "",
  },
};
export const SelectSmall: Story = {
  args: {
    label: "Select label",

    value: "primary Select value...",
    sizeType: "small",
    options: [
      {
        value: "value1",
        label: "label1",
      },
      {
        value: "value2",
        label: "label2",
      },
      {
        value: "value3",
        label: "label3",
      },
    ],
    className: "",
    classNameError: "",
    classNameLabel: "",
    classNameSelectInput: "",
  },
};
export const SelectMedium: Story = {
  args: {
    label: "Select label",

    value: "primary Select value...",
    sizeType: "medium",
    options: [
      {
        value: "value1",
        label: "label1",
      },
      {
        value: "value2",
        label: "label2",
      },
      {
        value: "value3",
        label: "label3",
      },
    ],
    className: "",
    classNameError: "",
    classNameLabel: "",
    classNameSelectInput: "",
  },
};
export const SelectLarge: Story = {
  args: {
    label: "Select label",
    value: "primary Select value...",
    sizeType: "large",
    options: [
      {
        value: "value1",
        label: "label1",
      },
      {
        value: "value2",
        label: "label2",
      },
      {
        value: "value3",
        label: "label3",
      },
    ],
    className: "",
    classNameError: "",
    classNameLabel: "",
    classNameSelectInput: "",
  },
};
