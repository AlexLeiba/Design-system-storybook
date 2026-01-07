import React, { useEffect, useRef, useState, type ComponentProps } from "react";
import { labelInputVariants } from "../../../../lib/cvaVariants";
import { DragAndDropContainer } from "./DragAndDropContainer";
import { PreviewFile } from "./PreviewFile";
import { PreviewImage } from "./PreviewImage";
import { Button } from "../Button/Button";
import { cn } from "../../../../lib/utilities";

type Props = ComponentProps<"div"> & {
  handleSubmitFile?: (data: {
    error: string;
    file: { name: string; url: string }[];
  }) => void;
  buttonTitle?: string;
  label?: string;
  error?: string;
  success?: boolean;
  uploadVariant?: "single" | "multiple";
  uiVariant?: "button" | "dragAndDropContainer";
  fileTypes: "files" | "images";
  buttonVariant:
    | "primary"
    | "secondary"
    | "tertiary"
    | "destructive"
    | "ghost"
    | "link";
  size: "small" | "medium" | "large";
  loading?: boolean;
  disabled?: boolean;
  allowedFileTypes: {
    files: string[];
    images: string[];
  };
  inputName?: string;
  // classnames for style
  classNamelabel?: string;
  classNameError?: string;
  classNameButton?: string;
  classNameDragAndDropContainer?: string;
  classNamePreviewImageContainer?: string;
  classNamePreviewImageCloseButton?: string;
};

const allowedTypes = {
  files: ["csv", "xlsx", "txt", "pdf"],
  images: ["jpg", "jpeg", "png", "webp", "svg"],
};

export function FileUpload({
  handleSubmitFile,
  error,
  success,
  label,
  buttonTitle = "Upload",
  fileTypes = "images",
  uploadVariant = "single",
  uiVariant = "button",
  buttonVariant = "primary",
  size = "medium",
  loading = false,
  disabled,
  allowedFileTypes = allowedTypes,
  inputName,
  classNamelabel = "",
  classNameButton = "",
  classNameDragAndDropContainer = "",
  classNamePreviewImageContainer = "",
  classNamePreviewImageCloseButton = "",
  classNameError = "",
  className = "",
  ...props
}: Props) {
  const [previewUrl, setPreviewUrl] = React.useState<string>("");
  const [uploadedMultipleFiles, setUploadedMultipleFiles] = React.useState<
    {
      name: string;
      url: string;
    }[]
  >([]);
  const [uploadedSingleFile, setUploadedSingleFile] =
    React.useState<File | null>(null);

  const [caughtError, setCaughtError] = useState("");

  const uploadRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (uploadVariant === "multiple") {
      handleSubmitFile?.({
        error: "",
        file: uploadedMultipleFiles,
      });
    }
    if (uploadVariant === "single" && uploadedSingleFile) {
      handleSubmitFile?.({
        error: "",
        file: [{ name: uploadedSingleFile?.name, url: previewUrl }],
      });
    }
  }, [uploadedMultipleFiles, uploadedSingleFile]);

  function handleUploadFile(fileData: File) {
    try {
      if (!fileData) {
        throw new Error(`No file was provided, try again please`);
      }
      //check file type
      const fileFormat = fileData?.type.split("/")[1];

      if (!fileFormat) {
        throw new Error(`No file format was provided, try again please`);
      }
      //check if allowed
      if (!allowedFileTypes[fileTypes].includes(fileFormat)) {
        throw new Error(
          `Forbidden file format ${fileFormat}, allowed formats: ${allowedFileTypes[
            fileTypes
          ].map((format) => format)}`
        );
      }

      // parse in base64 string for handling Binary Data
      const base64String = URL.createObjectURL(fileData);

      if (!base64String) {
        throw new Error("Invalid file was provided, please try again");
      }

      if (uploadVariant === "multiple") {
        setUploadedMultipleFiles((prev) => {
          return [
            ...prev,
            {
              url: base64String,
              name: fileData.name,
            },
          ];
        });
        setCaughtError("");
      }
      if (uploadVariant === "single") {
        setPreviewUrl(base64String);
        setUploadedSingleFile(fileData);
        setCaughtError("");
      }
    } catch (error: any) {
      handleSubmitFile?.({
        error: error.message || "Something went wrong",
        file: [{ name: "", url: "" }],
      });
      setCaughtError(error.message || "Something went wrong");
    }
  }

  function handleDelete(index: number) {
    setPreviewUrl("");
    setCaughtError("");
    if (uploadVariant === "multiple") {
      setUploadedMultipleFiles((prev) => {
        return prev.filter((_, fileIndex) => fileIndex !== index);
      });
    } else {
      setUploadedSingleFile(null);
    }
  }

  return (
    <div className={cn("flex flex-col gap-1", className)} {...props}>
      {/* LABEL */}
      {label && (
        <label htmlFor={label || "fileUpload"}>
          <p
            className={cn(
              labelInputVariants({
                errorState: !!error,
                successState: !!success,
              }),
              classNamelabel
            )}
          >
            {label}
          </p>
        </label>
      )}
      <input
        name={inputName}
        id={label || "fileUpload"}
        ref={uploadRef}
        className="hidden"
        type="file"
        onChange={(e) => {
          const file = e.target.files?.[0];
          file && handleUploadFile(file);
        }}
      />
      {/* BUTTON UPLOAD */}
      {uiVariant === "button" && (
        <Button
          title={`upload ${fileTypes}`}
          disabled={disabled || loading}
          className={classNameButton}
          loading={loading}
          size={size}
          variant={buttonVariant}
          onClick={() => uploadRef.current?.click()}
        >
          {buttonTitle}
        </Button>
      )}
      {/* DRAG AND DROP */}
      {uiVariant === "dragAndDropContainer" && (
        <DragAndDropContainer
          title={`upload ${fileTypes}`}
          disabled={disabled || loading}
          className={classNameDragAndDropContainer}
          buttonTitle={buttonTitle}
          onClick={() => uploadRef.current?.click()}
          size={size}
          label={label}
          onDrop={(e) => {
            e.preventDefault();
            const file = e.dataTransfer.files?.[0];
            file && handleUploadFile(file);
          }}
        />
      )}
      {(error || caughtError) && (
        <p className={cn("text-sm text-red-600", classNameError)}>
          {error || caughtError}
        </p>
      )}

      {/* MULTIPLE */}
      <div className="flex flex-wrap gap-4">
        {uploadVariant === "multiple" &&
          uploadedMultipleFiles.map((file, index) => {
            return (
              <>
                {fileTypes === "files" && (
                  <PreviewFile
                    className={classNamePreviewImageContainer}
                    closeButtonClassName={classNamePreviewImageCloseButton}
                    size={size}
                    key={index}
                    fileUrl={file.url}
                    fileName={file.name}
                    handleClear={() => handleDelete(index)}
                  />
                )}
                {fileTypes === "images" && (
                  <PreviewImage
                    className={classNamePreviewImageContainer}
                    closeButtonClassName={classNamePreviewImageCloseButton}
                    size={size}
                    key={index}
                    imgUrl={file.url}
                    handleClear={() => handleDelete(index)}
                  />
                )}
              </>
            );
          })}
      </div>
      {/* SINGLE */}
      {uploadVariant === "single" && uploadedSingleFile && (
        <>
          {fileTypes === "files" && (
            <PreviewFile
              className={classNamePreviewImageContainer}
              closeButtonClassName={classNamePreviewImageCloseButton}
              size={size}
              fileUrl={previewUrl}
              fileName={uploadedSingleFile.name}
              handleClear={() => handleDelete(0)}
            />
          )}
          {fileTypes === "images" && (
            <PreviewImage
              className={classNamePreviewImageContainer}
              closeButtonClassName={classNamePreviewImageCloseButton}
              size={size}
              imgUrl={previewUrl}
              handleClear={() => handleDelete(0)}
            />
          )}
        </>
      )}
    </div>
  );
}
