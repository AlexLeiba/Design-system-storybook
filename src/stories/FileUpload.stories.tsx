import type { StoryObj, Meta } from "@storybook/react";
import { FileUpload } from "../components/ui/FileUpload/FileUpload";

const meta: Meta = {
  title: "Example/FileUpload",
  component: FileUpload,
  tags: ["autodocs"],
  argTypes: {
    handleSubmitFile: { action: "function" },
    buttonVariant: {
      control: "radio",
      options: [
        "primary",
        "secondary",
        "tertiary",
        "destructive",
        "ghost",
        "link",
      ],
      defaultValue: "primary",
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
      defaultValue: "medium",
    },
    allowedFileTypes: {
      control: "object",
      defaultValue: {
        files: ["csv", "xlsx", "txt", "pdf"],
        images: ["jpg", "jpeg", "png", "webp", "svg"],
      },
      description: "Define allowed file types",
    },
    buttonClassName: { control: "check" },
    buttonTitle: { control: "text" },
    uploadVariant: {
      control: "radio",
      options: ["single", "multiple"],
      defaultValue: "single",
    },
    disabled: { control: "boolean" },
    error: { control: "text" },
    success: { control: "boolean" },
    title: { control: "text" },
    inputName: {
      control: "check",
      description: "Input name which will be stored in the submitted form",
    },
    className: { control: "check", description: "FileUpload container class" },
    dragAndDropContainerClassName: {
      control: "check",
      description: "FileUpload drag and drop container class",
    },
    dragAndDropContainerTitle: {
      control: "check",
      description: "FileUpload drag and drop container title",
    },
    dragAndDropContainerDescription: {
      control: "check",
      description: "FileUpload drag and drop container description",
    },
    dragAndDropContainerIcon: {
      control: "check",
      description: "FileUpload drag and drop container icon",
    },
    errorClassName: { control: "check" },
    successClassName: { control: "check" },
    previewImageContainerClassName: {
      control: "check",
      description: "FileUpload preview image container class",
    },
    previewImageContainerTitle: {
      control: "check",
      description: "FileUpload preview image container title",
    },
    previewImageContainerDescription: {
      control: "check",
      description: "FileUpload preview image container description",
    },
    previewImageContainerIcon: {
      control: "check",
      description: "FileUpload preview image container icon",
    },
    previewImageCloseButtonClassName: {
      control: "check",
      description: "FileUpload preview image close button class",
    },
    titleClassName: { control: "check" },
  },
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
