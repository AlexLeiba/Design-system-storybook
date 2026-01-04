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
    selectType: {
      control: "radio",
      options: ["single", "multiple"],
      defaultValue: "single",
    },
    className: {
      control: "check",
      defaultValue: "className of the dropdown container",
    },
    classNameLabel: {
      control: "check",
      defaultValue: "",
    },
    classNameError: {
      control: "check",
      defaultValue: "",
    },
    classNameDropMenuContainer: {
      control: "check",
      defaultValue: "",
    },
    classNameDropMenuElementButton: {
      control: "check",
      defaultValue: "",
    },
    classNameDropMenuElementTitle: {
      control: "check",
      defaultValue: "",
    },
    classNameContainerSelectedMultipleOptions: {
      control: "check",
      defaultValue: "",
    },
    classNamePlaceholder: {
      control: "check",
      defaultValue: "",
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
