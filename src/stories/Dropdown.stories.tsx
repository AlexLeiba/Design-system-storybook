import type { StoryObj, Meta } from "@storybook/react";
import Dropdown from "../components/ui/Dropdown/Dropdown";

const DropdownComponent = (args: any) => {
  return (
    <div className="h-[400px] ">
      <Dropdown {...args} />
    </div>
  );
};

const meta: Meta = {
  title: "Example / Dropdown",
  component: DropdownComponent,
  argTypes: {
    options: {
      control: "object",
      defaultValue: [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
      ],
    },
    defaultSelectedSingleValueValue: {
      control: "object",
      defaultValue: { value: "option1", label: "Option 1" },
    },
    label: {
      control: "text",
      defaultValue: "Dropdown label",
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
    },
    variant: {
      control: "radio",
      options: ["primary", "secondary", "ghost"],
      defaultValue: "primary",
    },
    error: {
      control: "text",
      defaultValue: "",
    },
    success: {
      control: "boolean",
      defaultValue: false,
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
    selectedType: {
      control: "radio",
      options: ["single", "multiple"],
      defaultValue: "single",
    },
    className: {
      control: "check",
      defaultValue: "",
    },
    labelClassName: {
      control: "check",
      defaultValue: "",
    },
    errorClassName: {
      control: "check",
      defaultValue: "",
    },
    dropMenuContainerClassName: {
      control: "check",
      defaultValue: "",
    },
    dropMenuElementClassName: {
      control: "check",
      defaultValue: "",
    },
    dropMenuElementTitleClassName: {
      control: "check",
      defaultValue: "",
    },
    handleSelectValue: {
      control: "check",
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
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const DropdownSingleDefault: Story = {
  args: {
    label: "Dropdown label",
    defaultSelectedSingleValueValue: {
      value: "option1",
      label: " Option 1",
    },
    selectType: "single",
    variant: "primary",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    handleSelectValue: (value) => console.log(value),
  },
};
export const DropdownMultipleOptionsDefault: Story = {
  args: {
    label: "Dropdown label",
    defaultSelectedMultipleValues: [
      {
        value: "option1",
        label: " Option 1",
      },
    ],
    selectType: "multiple",
    variant: "primary",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    handleSelectValue: (value) => console.log(value),
  },
};
export const DropdownMultipleOptionsSecondary: Story = {
  args: {
    label: "Dropdown label",
    defaultSelectedMultipleValues: [
      {
        value: "option1",
        label: " Option 1",
      },
    ],
    selectType: "multiple",
    variant: "secondary",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    handleSelectValue: (value) => console.log(value),
  },
};
export const DropdownMultipleOptionsGhost: Story = {
  args: {
    label: "Dropdown label",
    defaultSelectedMultipleValues: [
      {
        value: "option1",
        label: " Option 1",
      },
    ],
    selectType: "multiple",
    variant: "ghost",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    handleSelectValue: (value) => console.log(value),
  },
};

export const DropdownSuccess: Story = {
  args: {
    label: "Dropdown label",
    defaultSelectedSingleValueValue: {
      value: "option1",
      label: " Option 1",
    },
    selectType: "multiple",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    handleSelectValue: (value) => console.log(value),
    success: true,
  },
};
export const DropdownError: Story = {
  args: {
    label: "Dropdown label",
    defaultSelectedSingleValueValue: {
      value: "option1",
      label: " Option 1",
    },
    selectType: "multiple",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    handleSelectValue: (value) => console.log(value),
    error: "Error message",
  },
};
