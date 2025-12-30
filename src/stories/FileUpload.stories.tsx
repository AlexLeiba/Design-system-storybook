import type { StoryObj, Meta } from "@storybook/react";
import { FileUpload } from "../components/ui/FileUpload/FileUpload";

const meta: Meta = {
  title: "Example/FileUpload",
  component: FileUpload,
  tags: ["autodocs"],
  argTypes: { handleSubmitFile: { action: "function" } },
  args: {},
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
type Story = StoryObj<typeof FileUpload>;

export const FileUploadDefaultSingle: Story = {
  args: { buttonTitle: "File Upload Primary Single" },
};
export const FileUploadDefaultMultiple: Story = {
  args: {
    buttonTitle: "File Upload Primary Multiple",
    uploadVariant: "multiple",
  },
};

export const FileUploadSecondary: Story = {
  args: {
    buttonVariant: "secondary",
    buttonTitle: "Upload File Secondary",
    size: "small",
  },
};
export const FileUploadTertiary: Story = {
  args: {
    buttonVariant: "tertiary",
    buttonTitle: "Upload File",
    size: "medium",
  },
};
export const FileUploadPrimaryLarge: Story = {
  args: {
    buttonVariant: "primary",
    buttonTitle: "Upload File",
    size: "large",
  },
};
