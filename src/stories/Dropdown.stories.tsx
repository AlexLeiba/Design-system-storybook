import type { StoryObj, Meta } from "@storybook/react";
import { Dropdown as DropdownComponent } from "../components/ui/Dropdown/Dropdown";

const Dropdown = (args: any) => {
  return (
    <div className="h-[400px] ">
      <DropdownComponent {...args} />
    </div>
  );
};

const meta: Meta = {
  title: "Example / Dropdown",
  component: Dropdown,
  argTypes: {
    defaultSelectedSingleValue: {
      control: "object",
      defaultValue: { value: "option1", label: "Option 1" },
      description:
        "The value should be found in the <b>options attribute</b> array",
    },
    options: {
      control: "object",
      defaultValue: [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
      ],
    },
    label: {
      control: "text",
      defaultValue: "Dropdown label",
    },
    placeholder: {
      control: "text",
      defaultValue: "Placeholder when no options is selected",
      type: "string",
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
      type: "string",
    },
    success: {
      control: "boolean",
      defaultValue: false,
      type: "boolean",
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
      type: "boolean",
    },
    selectType: {
      control: "radio",
      options: ["single", "multiple"],
      defaultValue: "single",
    },
    className: {
      control: "check",
      defaultValue: "className of the dropdown container",
      type: "string",
    },
    classNameLabel: {
      control: "check",
      defaultValue: "",
      type: "string",
    },
    classNameError: {
      control: "check",
      defaultValue: "",
      type: "string",
    },
    classNameDropMenuContainer: {
      control: "check",
      defaultValue: "",
      type: "string",
    },
    classNameDropMenuElementButton: {
      control: "check",
      defaultValue: "",
      type: "string",
    },
    classNameDropMenuElementTitle: {
      control: "check",
      defaultValue: "",
      type: "string",
    },
    classNameContainerSelectedMultipleOptions: {
      control: "check",
      defaultValue: "",
      type: "string",
    },
    classNamePlaceholder: {
      control: "check",
      defaultValue: "",
      type: "string",
    },

    handleSelectValue: {
      control: "check",
      description:
        "Function called when an option is selected <b> handleSelectValue: (value: OptionsType) => void;</b>",
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

type Story = StoryObj<typeof DropdownComponent>;

export const DropdownSingleDefault: Story = {
  args: {
    label: "Dropdown label",
    defaultSelectedSingleValue: {
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
    className: "",
    classNameLabel: "",
    classNameError: "",
    classNameDropMenuContainer: "",
    classNameDropMenuElementButton: "",
    classNameDropMenuElementTitle: "",
    classNameContainerSelectedMultipleOptions: "",
    classNamePlaceholder: "",
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
    className: "",
    classNameLabel: "",
    classNameError: "",
    classNameDropMenuContainer: "",
    classNameDropMenuElementButton: "",
    classNameDropMenuElementTitle: "",
    classNameContainerSelectedMultipleOptions: "",
    classNamePlaceholder: "",
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
    className: "",
    classNameLabel: "",
    classNameError: "",
    classNameDropMenuContainer: "",
    classNameDropMenuElementButton: "",
    classNameDropMenuElementTitle: "",
    classNameContainerSelectedMultipleOptions: "",
    classNamePlaceholder: "",
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
    className: "",
    classNameLabel: "",
    classNameError: "",
    classNameDropMenuContainer: "",
    classNameDropMenuElementButton: "",
    classNameDropMenuElementTitle: "",
    classNameContainerSelectedMultipleOptions: "",
    classNamePlaceholder: "",
    handleSelectValue: (value) => console.log(value),
  },
};

export const DropdownSuccess: Story = {
  args: {
    label: "Dropdown label",
    defaultSelectedSingleValue: {
      value: "option1",
      label: " Option 1",
    },
    selectType: "multiple",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    className: "",
    classNameLabel: "",
    classNameError: "",
    classNameDropMenuContainer: "",
    classNameDropMenuElementButton: "",
    classNameDropMenuElementTitle: "",
    classNameContainerSelectedMultipleOptions: "",
    classNamePlaceholder: "",
    handleSelectValue: (value) => console.log(value),
    success: true,
  },
};
export const DropdownError: Story = {
  args: {
    label: "Dropdown label",
    defaultSelectedSingleValue: {
      value: "option1",
      label: " Option 1",
    },
    selectType: "multiple",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    className: "",
    classNameLabel: "",
    classNameError: "",
    classNameDropMenuContainer: "",
    classNameDropMenuElementButton: "",
    classNameDropMenuElementTitle: "",
    classNameContainerSelectedMultipleOptions: "",
    classNamePlaceholder: "",
    handleSelectValue: (value) => console.log(value),
    error: "Error message",
  },
};

export const DropdownMultipleOptionsDisabled: Story = {
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
    className: "",
    classNameLabel: "",
    classNameError: "",
    classNameDropMenuContainer: "",
    classNameDropMenuElementButton: "",
    classNameDropMenuElementTitle: "",
    classNameContainerSelectedMultipleOptions: "",
    classNamePlaceholder: "",
    disabled: true,
    handleSelectValue: (value) => console.log(value),
  },
};
