import type { StoryObj, Meta } from "@storybook/react";
import Dropdown from "../components/ui/Dropdown/Dropdown";

const DropdownComponent = () => {
  return (
    <div className="h-[300px] ">
      <Dropdown
        title={"Dropdown title"}
        options={[
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" },
        ]}
        handleSelectValue={(v) => console.log("selected", v)}
      />
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
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const DropdownDefault: Story = {
  render: (args) => (
    <div className="h-[300px]">
      <Dropdown
        label={args.label}
        title={args.title}
        options={args.options}
        handleSelectValue={(v) => console.log("selected", v)}
      />
    </div>
  ),
  args: {
    label: "Default Dropdown",
    title: "default value",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    handleSelectValue: (v) => console.log("first", v),
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

export const DropdownMultipleOptionsDefault: Story = {
  render: (args) => (
    <div className="h-[300px]">
      <Dropdown
        selectType="multiple"
        label={"Multiple Options Dropdown"}
        title={"default value"}
        options={[
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" },
        ]}
        handleSelectValue={(v) => console.log("selected", v)}
      />
    </div>
  ),
};

export const DropdownSuccess: Story = {
  render: (args) => (
    <div className="h-[300px]">
      <Dropdown
        success
        selectType="multiple"
        label={"Dropdown success"}
        title={"default value"}
        options={[
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" },
        ]}
        handleSelectValue={(v) => console.log("selected", v)}
      />
    </div>
  ),
};

export const DropdownError: Story = {
  render: (args) => (
    <div className="h-[300px]">
      <Dropdown
        error="Error message"
        selectType="multiple"
        label={"Dropdown error"}
        title={"default value"}
        options={[
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" },
        ]}
        handleSelectValue={(v) => console.log("selected", v)}
      />
    </div>
  ),
};
