import type { StoryObj, Meta } from "@storybook/react";
import {
  Tooltip,
  type Props as TooltipProps,
} from "../components/ui/Tooltip/Tooltip";
import { Button } from "../components/ui/Button/Button";

const TooltipWithButton = ({
  title,
  size,
  variant,
  position,
  icon,

  handleIconClick,
  ...props
}: TooltipProps) => {
  return (
    <div className="h-[200px] mt-10">
      <Tooltip
        title={title}
        icon={icon}
        size={size}
        variant={variant}
        position={position}
        handleIconClick={handleIconClick}
        {...props}
      >
        <Button className="w-[350px] ">"Hover over me to see tooltip"</Button>
      </Tooltip>
    </div>
  );
};

const meta: Meta = {
  title: "Example/Tooltip",
  component: TooltipWithButton,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      defaultValue: "This is a tooltip",
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
      defaultValue: "medium",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const TooltipDefault: Story = {
  render: (args) => (
    <div className="h-[200px] mt-10">
      <Tooltip
        title={args.title}
        size={args.size}
        variant={args.variant}
        handleIconClick={() => {}}
      >
        <Button className="w-[350px] ">"Hover over me to see tooltip"</Button>
      </Tooltip>
    </div>
  ),
  args: {
    title: "This is a tooltip",
    size: "medium",
  },
  parameters: {
    docs: {
      description: {
        story:
          "This is a default tooltip , the code doesn't show how to use it. If you want to see how to use it, check the code of the examples below.", //additional desc in the auto generated docs.
      },
    },
  },
};

export const TooltipSecondary: Story = {
  render: (args) => (
    <div className="h-[200px] mt-10">
      <Tooltip
        title={"This is a tooltip"}
        size={"medium"}
        variant={"secondary"}
        handleIconClick={() => {}}
      >
        <Button className="w-[350px] ">"Hover over me to see tooltip"</Button>
      </Tooltip>
    </div>
  ),
  args: {
    title: "This is a tooltip",
    size: "medium",
  },
};
export const TooltipTertiary: Story = {
  render: (args) => (
    <div className="h-[200px] mt-10">
      <Tooltip
        title={"This is a tooltip"}
        size={"medium"}
        variant={"tertiary"}
        handleIconClick={() => {}}
      >
        <Button className="w-[350px] ">"Hover over me to see tooltip"</Button>
      </Tooltip>
    </div>
  ),
  args: {
    title: "This is a tooltip",
    size: "medium",
  },
};
